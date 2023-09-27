export interface IGetJobAds {
  employer: string;
  historicalFrom?: string;
  historicalTo?: string;
  offset?: number;
  limit?: number;
  page?: number;
  result?: number;
}
