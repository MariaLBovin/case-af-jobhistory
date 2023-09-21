import {
  FormInputType,
  FormInputVariation,
  FormValidationMessageVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiFormInput,
  DigiFormValidationMessage,
} from "@digi/arbetsformedlingen-react";
import searchStyles from "../styles/search.module.css";
import { useState } from "react";
import { DigiFormInputCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { ISearchProps } from "../models/ISearchProps";

export const Inputfield = ({
  handleSubmit,
  handleValues,
  currentValue,
}: ISearchProps) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (e: DigiFormInputCustomEvent<HTMLInputElement>) => {
    handleValues(e.target.value.toString());
  };

  const onSubmit = () => {
    if (currentValue.trim().length < 2) {
      setButtonClicked(true);
    } else {
      handleSubmit();
      setButtonClicked(false);
    }
  };

  return (
    <>
      <div className={searchStyles.search_container}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <DigiFormInput
          afLabel='Sök efter arbetsgivare med namn eller organisationsnummer'
          afLabelDescription='T.ex. Arbetsförmedlingen'
          afValue={currentValue}
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.TEXT}
          onAfOnInput={handleChange}
        >
          <DigiButton slot='button' onAfOnClick={onSubmit}>
            Sök
          </DigiButton>
        </DigiFormInput>
        {buttonClicked && currentValue.length < 2 && (
          <DigiFormValidationMessage
            afVariation={FormValidationMessageVariation.ERROR}
          >
            Du behöver ange minst två bokstäver eller siffror för att kunna söka
          </DigiFormValidationMessage>
        )}
      </div>
    </>
  );
};
