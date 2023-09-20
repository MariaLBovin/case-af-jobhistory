import { useState } from "react";
import { IGetJobAds } from "@/services/JobAdSearchServices";
import { Inputfield } from "./Inputfield";

export type SearchProps = {
  handleSubmit: () => void;
  handleValues: (data: string) => void;
  currentValue: string;
};

const Search = () => {
  const [searchBody, setSearchBody] = useState<IGetJobAds>({ employer: "" });

  const handleSubmit = () => {
    console.log("clicked submit, make search request");
    setSearchBody({ ...searchBody, employer: "" });
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
