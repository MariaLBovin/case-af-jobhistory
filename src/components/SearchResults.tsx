import listStyle from "../styles/displaySearchReslut.module.css";
import {
  FormSelectVariation,
  FormSelectValidation,
} from "@digi/arbetsformedlingen";
import {
  DigiFormSelect,
  DigiNavigationPagination,
} from "@digi/arbetsformedlingen-react";
import { useContext, useState } from "react";
import { DigiFormSelectCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { ResultList } from "./ResultList";
import { IJobAdsContext, JobAdsContext } from "../context/JobAdsContext";


const SearchResults = () => {
  const {adsResponse} =useContext<IJobAdsContext>(JobAdsContext)
  const hits = adsResponse.hits
  console.log(hits);
  
  const [results, setResults] = useState<number>(10);
  const maximumOfAds = 100;

  const totaltNumberOfAds = hits.length;
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
        <option value='10'>10</option>
        <option value='20'>25</option>
        <option value='50'>25</option>
      </DigiFormSelect>
      <ResultList hits={hits} resultsPerPage={results}></ResultList>
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


