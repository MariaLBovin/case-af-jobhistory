import { useContext } from 'react';
import { JobAdsContext } from '../context/JobAdsContext';
import { IAd } from '../models/IAd';

export function useAd(id: string | undefined) {
	const { adsResponse } = useContext(JobAdsContext);
	const ad: IAd | undefined = adsResponse.hits.find((ad) => ad.id === id);

	if (ad) {
		console.log('hittade sidan');
		return ad;
	}

	if (!ad) {
		console.log('hittade inte sidan');
		return undefined;
	}
}
