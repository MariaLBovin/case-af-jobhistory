import searchResultsStyles from '@/styles/SearchResults.module.css';
import {
	FormSelectValidation,
	FormSelectVariation,
} from '@digi/arbetsformedlingen';
import {
	DigiButton,
	DigiFormSelect,
	DigiNavigationPagination,
} from '@digi/arbetsformedlingen-react';
import {
	DigiFormSelectCustomEvent,
	DigiNavigationPaginationCustomEvent,
} from '@digi/arbetsformedlingen/dist/types/components';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IJobAdsContext, JobAdsContext } from '../context/JobAdsContext';
import { ResultList } from './ResultList';
import Statistics from './Statistics';

const SearchResults = () => {
	const { adsResponse } = useContext<IJobAdsContext>(JobAdsContext);
	const { page, result } = useParams();
	const navigate = useNavigate();
	const [showStatistics, setShowStatistics] = useState(false);

	const hits = adsResponse.hits;

	const currentPage = page ? parseInt(page) : 1;
	const resultState = result ? parseInt(result) : 10;
	console.log(currentPage);

	const totaltNumberOfAds = hits.length;

	const totaltPages = Math.ceil(totaltNumberOfAds / resultState);
	console.log(totaltPages);

	const handleResults = (e: DigiFormSelectCustomEvent<HTMLSelectElement>) => {
		const newResults = parseInt(e.target.value);
		navigate(`/search-results/${currentPage}/${newResults}`);
	};

	const startIndex = (currentPage - 1) * resultState;
	const endIndex = startIndex + resultState;

	const startNumber = startIndex + 1;

	const filteredAds = hits.slice(startIndex, endIndex);

	const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
		const newPage = e.detail;
		navigate(`/search-results/${newPage}/${resultState}`);
	};

	const toggleStatistics = () => {
		setShowStatistics(!showStatistics);
	};

	return (
		<section className={searchResultsStyles.results_container}>
			<div className={searchResultsStyles.inner_container}>
				{showStatistics && <Statistics></Statistics>}
				<div className={searchResultsStyles.range_selector}>
					<div className={searchResultsStyles.button_div}>
						<DigiButton onAfOnClick={toggleStatistics}>
							Toggla diagram
						</DigiButton>
					</div>
					<DigiFormSelect
						afLabel='Visa antal träffar'
						afVariation={FormSelectVariation.SMALL}
						afValidation={FormSelectValidation.NEUTRAL}
						onAfOnChange={handleResults}
						afValue={
							resultState === 50 ? '50' : resultState === 25 ? '25' : '10'
						}
					>
						<option value='10'>10</option>
						<option value='25'>25</option>
						<option value='50'>50</option>
					</DigiFormSelect>
				</div>

				<ResultList filteredAds={filteredAds}></ResultList>
				<DigiNavigationPagination
					afTotalPages={totaltPages}
					afInitActive-page={currentPage}
					afCurrentResultStart={startNumber}
					afCurrentResultEnd={endIndex}
					afTotalResults={totaltNumberOfAds}
					afResultName='annonser'
					onAfOnPageChange={handlePageChange}
				></DigiNavigationPagination>
			</div>
		</section>
	);
};

export default SearchResults;
