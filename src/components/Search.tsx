import { useContext, useState } from "react";
import { getJobAds } from "../services/JobAdSearchServices";
import { Inputfield } from "./Inputfield";
import { JobAdsContext } from "../context/JobAdsContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchBody, setSearchBody] = useState({ employer: "" });
  const { setAdsResponse } = useContext(JobAdsContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await getJobAds(searchBody);
    setAdsResponse(response);
    // setSearchBody({ ...searchBody, employer: "" });
    navigate("/search-results");
  };

  const handleValues = (data: string) => {
    setSearchBody({ ...searchBody, employer: data });
  };
  return (
    <div>
      <Inputfield
        handleSubmit={handleSubmit}
        handleValues={handleValues}
        currentValue={searchBody.employer}
      />
    </div>
  );
};

export default Search;
