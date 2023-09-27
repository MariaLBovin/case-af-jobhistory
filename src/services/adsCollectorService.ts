import { getJobAds } from "@/services/JobAdSearchServices";
import { IGetJobAds } from "@/models/IGetJobAds";
import { IGetJobAdsResponse } from "@/models/IGetJobAdsResponse";

const adsCollector = async (
  params: IGetJobAds
): Promise<IGetJobAdsResponse> => {
  const collectedData: IGetJobAdsResponse = { total: { value: 0 }, hits: [] };
  let offset: number = 0;

  while (offset <= 2000) {
    const response = await getJobAds({ ...params, offset, limit: 100 });
    collectedData.hits = [...collectedData.hits, ...response.hits];
    offset += 100;
    if (collectedData.hits.length >= response.total.value) {
      break;
    }
  }

  collectedData.total.value = collectedData.hits.length;
  return collectedData;
};

export default adsCollector;
