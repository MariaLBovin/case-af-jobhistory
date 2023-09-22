import { Outlet, useLocation } from "react-router-dom";
import { paths } from "../config/paths";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import layoutStyles from "../styles/Layout.module.css";
import { JobAdsContext } from "../context/JobAdsContext";
import { IGetJobAdsResponse } from "../models/IGetJobAdsResponse";

const Layout = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  // const [adsData, setAdsData] = useState<IGetJobAdsResponse>({ hits: [] });
  const [adsResponse, setAdsResponse] = useState<IGetJobAdsResponse>({
    hits: [],
  });
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname == paths.home ||
      location.pathname == paths.searchResults
    ) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <JobAdsContext.Provider value={{ adsResponse, setAdsResponse }}>
        <main
          className={`${layoutStyles.main_container} ${
            location.pathname == "/" && layoutStyles.home_green
          }`}
        >
          {location.pathname == "/" && <Outlet />}
          {showSearch && <Search />}
          {location.pathname != "/" && <Outlet />}
        </main>
      </JobAdsContext.Provider>
      <Footer />
    </>
  );
};

export default Layout;
