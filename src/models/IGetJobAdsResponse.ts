import { IAd } from "./IAd";

export interface IGetJobAdsResponse {
  total: {
    value: number;
  };
  hits: IAd[];
}
