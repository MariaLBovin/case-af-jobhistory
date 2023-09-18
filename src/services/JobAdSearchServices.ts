import { IGetJobAdsResponse } from '@/models/IGetJobAdsResponse';
import { get } from './ServiceBase';

// Base values that pre-filters search results
const REQUEST_SPECCS = import.meta.env.REQUEST_SPECCS;

interface IGetJobAds {
	employer: string;
	historicalFrom?: string;
	historicalTo?: string;
}

export const getJobAds = async (params: IGetJobAds) => {
	if ((params.historicalFrom && params.historicalTo) === undefined) {
		return await get<IGetJobAdsResponse>(
			`search?employer=${params.employer}${REQUEST_SPECCS}`
		);
	}

	if (params.historicalTo === undefined) {
		return await get<IGetJobAdsResponse>(
			`search?employer=${params.employer}&historical-from=${params.historicalFrom}${REQUEST_SPECCS}`
		);
	}

	if (params.historicalFrom === undefined) {
		return await get<IGetJobAdsResponse>(
			`search?employer=${params.employer}&historical-to=${params.historicalTo}${REQUEST_SPECCS}`
		);
	}

	return await get<IGetJobAdsResponse>(
		`search?employer=${params.employer}&historical-from=${params.historicalFrom}&historical-to=${params.historicalTo}${REQUEST_SPECCS}`
	);
};

export const getAd = async (id: string) => {
	return await get(`ad/${id}`);
};
