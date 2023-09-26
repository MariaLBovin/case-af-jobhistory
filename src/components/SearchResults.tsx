import {
  FormSelectValidation,
  FormSelectVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiFormSelect,
  DigiNavigationPagination,
} from "@digi/arbetsformedlingen-react";
import { useContext } from "react";
import {
  DigiFormSelectCustomEvent,
  DigiNavigationPaginationCustomEvent,
} from "@digi/arbetsformedlingen/dist/types/components";
import { ResultList } from "./ResultList";
import { IJobAdsContext, JobAdsContext } from "../context/JobAdsContext";
import { useNavigate, useParams } from "react-router-dom";
import searchResultsStyles from "@/styles/SearchResults.module.css";

const SearchResults = () => {

  const { adsResponse } = useContext<IJobAdsContext>(JobAdsContext);

  const navigate = useNavigate();

  const hits = adsResponse.hits;

  const { page, result } = useParams();

  const currentPage = page ? parseInt(page) : 1;
  const resultState = result ? parseInt(result) : 10;
  console.log(currentPage);

  const maximumOfAds = 100;

  const totaltNumberOfAds = hits.length;
  const totaltPages = Math.ceil(
    Math.min(totaltNumberOfAds, maximumOfAds) / resultState
  );

  const handleResults = (e: DigiFormSelectCustomEvent<HTMLSelectElement>) => {
    const newResults = parseInt(e.target.value);
    navigate(`/search-results/1/${newResults}`);
  };

  const startIndex = (currentPage - 1) * resultState;
  const endIndex = startIndex + resultState;

  const filteredAds = hits.slice(startIndex, endIndex);

  const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
    const newPage = e.detail;
    navigate(`/search-results/${newPage}/${resultState}`);
  };

  return (
    <section className={searchResultsStyles.results_container}>
      <div className={searchResultsStyles.inner_container}>
        <div className={searchResultsStyles.range_selector}>
          <DigiFormSelect
            afLabel='Visa antal träffar'
            afVariation={FormSelectVariation.SMALL}
            afValidation={FormSelectValidation.NEUTRAL}
            onAfOnChange={handleResults}
            afValue={
              resultState === 50 ? "50" : resultState === 25 ? "25" : "10"
            }
          >
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </DigiFormSelect>
        </div>
        <ResultList filteredAds={filteredAds}></ResultList>
        <DigiNavigationPagination
          afTotalPages={totaltPages}
          afInitActive-page={currentPage}
          afCurrentResultStart={currentPage}
          afCurrentResultEnd={resultState}
          afTotalResults={totaltNumberOfAds}
          afResultName='annonser'
          onAfOnPageChange={handlePageChange}
        ></DigiNavigationPagination>
      </div>
    </section>
  );
};

export default SearchResults;
