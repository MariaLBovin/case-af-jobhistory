import {
	FormSelectValidation,
	FormSelectVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFormSelect,
  DigiNavigationPagination,
} from "@digi/arbetsformedlingen-react";
import { 
  useContext, 
  useState } from "react";
import { 
  DigiFormSelectCustomEvent, 
  DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { ResultList } from "./ResultList";
import { 
  IJobAdsContext, 
  JobAdsContext } from "../context/JobAdsContext";
import { 
  useNavigate,} from 'react-router-dom';


const SearchResults = () => {
  const {adsResponse} =useContext<IJobAdsContext>(JobAdsContext)
  // const {page, result} = useParams();
  const navigate = useNavigate();

  const hits = adsResponse.hits

  const [resultState, setResultState] = useState<number>(10);
  const [currentPageState, setCurrentPageState] = useState<number>(1);

  const maximumOfAds = 100;

  const totaltNumberOfAds = hits.length;
  const totaltPages = Math.ceil(
    Math.min(totaltNumberOfAds, maximumOfAds) / resultState
  );

  const handleResults = (e: DigiFormSelectCustomEvent<HTMLSelectElement>) => {
    const newResults = parseInt(e.target.value)
    setResultState(newResults);
    setCurrentPageState(1)
    navigate(`/search-results?page=1&result=${newResults}`)
  };

  const startIndex = (currentPageState -1) * resultState;
  const endIndex = startIndex + resultState

  const filteredAds = hits.slice(startIndex, endIndex)

 const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
  const newPage = e.detail
  setCurrentPageState(newPage)
  navigate(`/search-results?page=${newPage}&result=${resultState}`)
  
 }

  return (
    <>
      <DigiFormSelect
        afLabel='Visa antal träffar'
        afVariation={FormSelectVariation.SMALL}
        afValidation={FormSelectValidation.NEUTRAL}
        onAfOnChange={handleResults}
      >
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
      </DigiFormSelect>
      <ResultList filteredAds={filteredAds}></ResultList>
      <DigiNavigationPagination
        afTotalPages={totaltPages}
        afInitActive-page={1}
        afCurrentResultStart={1}
        afCurrentResultEnd={resultState}
        afTotalResults={totaltNumberOfAds}
        afResultName='annonser'
        onAfOnPageChange={handlePageChange}
      ></DigiNavigationPagination>
    </>
  );

}

export default SearchResults;