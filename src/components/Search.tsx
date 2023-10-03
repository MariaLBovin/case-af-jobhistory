import { DatePicker } from '@/components/DatePicker';
import Inputfield from '@/components/Inputfield';
import { JobAdsContext } from '@/context/JobAdsContext';
import { IGetJobAds } from '@/models/IGetJobAds';
import { ISearchDates } from '@/models/ISearchDates';
import adsCollector from '@/services/adsCollectorService';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchStyles from '../styles/Search.module.css';

const Search = () => {
	const [searchBody, setSearchBody] = useState<IGetJobAds>({ employer: '' });
	const { setAdsResponse } = useContext(JobAdsContext);
	const navigate = useNavigate();

	const handleSubmit = async () => {
		setAdsResponse({
			total: {
				value: -1,
			},
			hits: [],
		});
		const pageValue = searchBody.page || 1;
		const resultValue = searchBody.result || 10;

		navigate(`/search-results/${pageValue}/${resultValue}`);
		// localStorage.setItem("search", JSON.stringify(searchBody));
		const response = await adsCollector(searchBody);
		setAdsResponse(response);
	};

	const handleSearchText = (data: string) => {
		setSearchBody({ ...searchBody, employer: data });
	};

	const handleSelectedDates = (dates: ISearchDates) => {
		if (dates.from)
			setSearchBody({ ...searchBody, historicalFrom: dates.from });
		if (dates.to) setSearchBody({ ...searchBody, historicalTo: dates.to });
	};

	return (
		<section className={searchStyles.search_container}>
			<div className={searchStyles.search_form}>
				<Inputfield
					handleSubmit={handleSubmit}
					handleSearchText={handleSearchText}
					currentValue={searchBody.employer}
				/>
				<DatePicker handleSelectedDates={handleSelectedDates} />
			</div>
		</section>
	);
};

export default Search;
