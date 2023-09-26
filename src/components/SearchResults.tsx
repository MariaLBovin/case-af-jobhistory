import {
  FormSelectValidation,
  FormSelectVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiFormSelect,
  DigiNavigationPagination,
} from "@digi/arbetsformedlingen-react";
import { useContext, useState } from "react";
import {
  DigiFormSelectCustomEvent,
  DigiNavigationPaginationCustomEvent,
} from "@digi/arbetsformedlingen/dist/types/components";
import { ResultList } from "@/components/ResultList";
import { IJobAdsContext, JobAdsContext } from "@/context/JobAdsContext";
import searchResultsStyles from "@/styles/SearchResults.module.css";

const SearchResults = () => {
  const { adsResponse } = useContext<IJobAdsContext>(JobAdsContext);
  const hits = adsResponse.hits;

  const [results, setResults] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const maximumOfAds = 100;

  const totaltNumberOfAds = hits.length;
  const totaltPages = Math.ceil(
    Math.min(totaltNumberOfAds, maximumOfAds) / results
  );

  const handleResults = (e: DigiFormSelectCustomEvent<HTMLSelectElement>) => {
    setResults(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * results;
  const endIndex = startIndex + results;

  const filteredAds = hits.slice(startIndex, endIndex);

  const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
    console.log(e.detail);
    const page = e.detail;
    setCurrentPage(page);
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
          >
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </DigiFormSelect>
        </div>
        <ResultList filteredAds={filteredAds}></ResultList>
        <DigiNavigationPagination
          afTotalPages={totaltPages}
          afInitActive-page={1}
          afCurrentResultStart={1}
          afCurrentResultEnd={results}
          afTotalResults={totaltNumberOfAds}
          afResultName='annonser'
          onAfOnPageChange={handlePageChange}
        ></DigiNavigationPagination>
      </div>
    </section>
  );
};
export default SearchResults;
