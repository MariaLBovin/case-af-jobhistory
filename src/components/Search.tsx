import { useContext, useState } from "react";
import { getJobAds } from "@/services/JobAdSearchServices";
import { Inputfield } from "@/components/Inputfield";
import { JobAdsContext } from "@/context/JobAdsContext";
import { useNavigate } from "react-router-dom";
import { DatePicker, ISearchDates } from "@/components/DatePicker";
import { IGetJobAds } from "@/models/IGetJobAds";

const Search = () => {
  const [searchBody, setSearchBody] = useState<IGetJobAds>({ employer: "" });
  const { setAdsResponse } = useContext(JobAdsContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await getJobAds(searchBody);
    setAdsResponse(response);
    // setSearchBody({ ...searchBody, employer: "" });
    navigate("/search-results");
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
    <div>
      <Inputfield
        handleSubmit={handleSubmit}
        handleSearchText={handleSearchText}
        currentValue={searchBody.employer}
      />
      <DatePicker handleSelectedDates={handleSelectedDates} />
    </div>
  );
};

export default Search;
