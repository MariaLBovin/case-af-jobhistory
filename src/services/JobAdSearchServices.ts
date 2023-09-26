import { IGetJobAdsResponse } from "@/models/IGetJobAdsResponse";
import { IGetJobAds } from "@/models/IGetJobAds";
import { get } from "@/services/ServiceBase";

// Base values that pre-filters search results
const REQUEST_SPECCS = import.meta.env.VITE_REQUEST_SPECCS;

export const getJobAds = async (params: IGetJobAds) => {
  const offset: number = params.offset ? params.offset : 0;
  const limit: number = params.limit ? params.limit : 100;

  if ((params.historicalFrom && params.historicalTo) === undefined) {
    return await get<IGetJobAdsResponse>(
      `search?employer=${params.employer}&offset=${offset}&limit=${limit}${REQUEST_SPECCS}`
    );
  }

  if (params.historicalTo === undefined) {
    return await get<IGetJobAdsResponse>(
      `search?employer=${params.employer}&historical-from=${params.historicalFrom}&offset=${offset}&limit=${limit}${REQUEST_SPECCS}`
    );
  }

  if (params.historicalFrom === undefined) {
    return await get<IGetJobAdsResponse>(
      `search?employer=${params.employer}&historical-to=${params.historicalTo}&offset=${offset}&limit=${limit}${REQUEST_SPECCS}`
    );
  }

  return await get<IGetJobAdsResponse>(
    `search?employer=${params.employer}&historical-from=${params.historicalFrom}&historical-to=${params.historicalTo}&offset=${offset}&limit=${limit}${REQUEST_SPECCS}`
  );
};

// Feature for version 2.0

export const getAd = async (id: string) => {
  return await get(`ad/${id}`);
};
