import { IGetJobAdsResponse } from "@/models/IGetJobAdsResponse";
import { createContext } from "react";

export interface IJobAdsContext {
  adsResponse: IGetJobAdsResponse;
  setAdsResponse: React.Dispatch<React.SetStateAction<IGetJobAdsResponse>>;
}

export const JobAdsContext = createContext<IJobAdsContext>({
  adsResponse: { total: { value: 0 }, hits: [] },
  setAdsResponse: () => {},
});
