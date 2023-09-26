import { useContext, useState } from "react";
import { getJobAds } from "@/services/JobAdSearchServices";
import { Inputfield } from "@/components/Inputfield";
import { JobAdsContext } from "@/context/JobAdsContext";
import { useNavigate } from "react-router-dom";
import { DatePicker, ISearchDates } from "@/components/DatePicker";
import { IGetJobAds } from "@/models/IGetJobAds";
import searchStyles from "../styles/Search.module.css";

const Search = () => {
  const [searchBody, setSearchBody] = useState<IGetJobAds>({ employer: "" });
  const { setAdsResponse } = useContext(JobAdsContext);
  const navigate = useNavigate();
  

  const handleSubmit = async () => {
    const response = await getJobAds(searchBody);

    const pageValue = searchBody.page || 1;
    const resultValue = searchBody.result || 10;
    setAdsResponse(response);

   
  
    navigate(`/search-results/${pageValue}/${resultValue}`)
    localStorage.setItem("search", JSON.stringify(response));
    // navigate("/search-results");
  };

  const handleSearchText = (data: string) => {
    setSearchBody({ ...searchBody, employer: data });
  };

  const handleSelectedDates = (dates: ISearchDates) => {
    if (dates.from)
      setSearchBody({ ...searchBody, historicalFrom: dates.from });
    if (dates.to) setSearchBody({ ...searchBody, historicalTo: dates.to });
  };

  return (
    <section className={searchStyles.search_container}>
      <div className={searchStyles.search_form}>
        <Inputfield
          handleSubmit={handleSubmit}
          handleSearchText={handleSearchText}
          currentValue={searchBody.employer}
        />
        <DatePicker handleSelectedDates={handleSelectedDates} />
      </div>
    </section>
  );
};

export default Search;
