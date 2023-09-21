import { IAd } from '@/models/IAd';
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
import { Link } from 'react-router-dom';
import listStyle from '../styles/displaySearchReslut.module.css';
import { ResultList } from './ResultList';

export const newAd1: IAd = {
	id: '12345',
	headline: 'Ledig tjänst',
	application_deadline: '2023-12-31',
	publication_date: '2023-12-31',
	number_of_vacancies: 3,
	description: {
		text: 'Detta är en jobbannons.',
	},
	employment_type: {
		label: 'Heltid',
	},
	salary_description: 'Konkurrenskraftig lön',
	employer: {
		url: 'https://www.arbetsgivare.com',
		organization_number: '1234567890',
		name: 'Arbetsgivare AB',
		workplace: 'Stockholm',
	},
	occupation: {
		label: 'Webbutvecklare',
	},
	occupation_group: {
		label: 'IT och telekommunikation',
	},
	occupation_field: {
		label: 'Teknik och naturvetenskap',
	},
	must_have: {
		languages: ['JavaScript'],
		education: ['Universitetsexamen'],
	},
	nice_to_have: {
		languages: ['Python'],
		education: ['Masterexamen'],
	},
};

export const newAd2: IAd = {
	id: '12345',
	headline: 'Ledig tjänst',
	application_deadline: '2023-12-31',
	publication_date: '2023-12-31',
	number_of_vacancies: 3,
	description: {
		text: 'Detta är en jobbannons.',
	},
	employment_type: {
		label: 'Heltid',
	},
	salary_description: 'Konkurrenskraftig lön',
	employer: {
		url: 'https://www.arbetsgivare.com',
		organization_number: '1234567890',
		name: 'Arbetsgivare AB',
		workplace: 'Stockholm',
	},
	occupation: {
		label: 'Webbutvecklare',
	},
	occupation_group: {
		label: 'IT och telekommunikation',
	},
	occupation_field: {
		label: 'Teknik och naturvetenskap',
	},
	must_have: {
		languages: ['JavaScript'],
		education: ['Universitetsexamen'],
	},
	nice_to_have: {
		languages: ['Python'],
		education: ['Masterexamen'],
	},
};

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
