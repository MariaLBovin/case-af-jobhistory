import { IAd } from "@/models/IAd";
import { IGetJobAdsResponse } from "@/models/IGetJobAdsResponse";

export function useAd(id: string | undefined, context: IGetJobAdsResponse) {
  const ad: IAd | undefined = context.hits.find((ad) => ad.id === id);

  if (ad) {
    console.log("hittade sidan");
    return ad;
  }

  if (!ad) {
    console.log("hittade inte sidan");
    return undefined;
  }
}
