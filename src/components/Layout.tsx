import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Search from '@/components/Search';
import { JobAdsContext } from '@/context/JobAdsContext';
import { IGetJobAdsResponse } from '@/models/IGetJobAdsResponse';
import layoutStyles from '@/styles/Layout.module.css';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { paths } from '../config/paths';

const Layout = () => {
	const [showSearch, setShowSearch] = useState<boolean>(false);
	const [adsResponse, setAdsResponse] = useState<IGetJobAdsResponse>({
		total: {
			value: -1,
		},
		hits: [],
	});
	const location = useLocation();

	useEffect(() => {
		if (
			location.pathname == paths.home ||
			location.pathname.includes('/search-results')
		) {
			setShowSearch(true);
		} else {
			setShowSearch(false);
		}
	}, [location.pathname]);

	// const data = localStorage.getItem("search");
	// useEffect(() => {
	//   if (data) {
	//     setAdsResponse(JSON.parse(data));
	//   }
	// }, [data]);

	return (
		<>
			<Header />
			<JobAdsContext.Provider value={{ adsResponse, setAdsResponse }}>
				<main
					className={`${layoutStyles.main_container} ${
						location.pathname == '/' && layoutStyles.home_green
					}`}
				>
					{location.pathname == '/' && <Outlet />}
					{showSearch && <Search />}
					{location.pathname != '/' && <Outlet />}
				</main>
			</JobAdsContext.Provider>
			<Footer />
		</>
	);
};

export default Layout;
