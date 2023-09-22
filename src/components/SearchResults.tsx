import { IAd } from '../models/IAd';

import {
	FormSelectValidation,
	FormSelectVariation,
} from '@digi/arbetsformedlingen';
import {
	DigiFormSelect,
	DigiNavigationPagination,
} from '@digi/arbetsformedlingen-react';
import { DigiFormSelectCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { useState } from 'react';
import { newAd1, newAd2 } from '../arrays/ads';
import listStyle from '../styles/displaySearchReslut.module.css';
import { ResultList } from './ResultList';

const ads: IAd[] = [newAd1, newAd2];

const SearchResults = () => {
	const [results, setResults] = useState<number>(1);
	const maximumOfAds = 100;

	const totaltNumberOfAds = ads.length;
	const totaltPages = Math.ceil(
		Math.min(totaltNumberOfAds, maximumOfAds) / results
	);

	const handleResults = (e: DigiFormSelectCustomEvent<HTMLSelectElement>) => {
		setResults(parseInt(e.target.value));
	};

	return (
		<>
			<DigiFormSelect
				afLabel='Visa antal träffar'
				afVariation={FormSelectVariation.SMALL}
				afValidation={FormSelectValidation.NEUTRAL}
				className={listStyle.test}
				onAfOnChange={handleResults}
			>
				<option value='1'>10</option>
				<option value='2'>25</option>
			</DigiFormSelect>
			<ResultList ads={ads} resultsPerPage={results}></ResultList>
			<DigiNavigationPagination
				afTotalPages={totaltPages}
				afInitActive-page={1}
				afCurrentResultStart={1}
				afCurrentResultEnd={totaltNumberOfAds}
				afTotalResults={totaltNumberOfAds}
				afResultName='annonser'
			></DigiNavigationPagination>
		</>
	);
};

export default SearchResults;
