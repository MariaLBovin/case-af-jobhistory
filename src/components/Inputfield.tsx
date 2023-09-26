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
import inputFieldStyles from "@/styles/InputField.module.css";
import { useState } from "react";
import { DigiFormInputCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { ISearchProps } from "@/models/ISearchProps";

const Inputfield = ({
  handleSubmit,
  handleSearchText,
  currentValue,
}: ISearchProps) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (e: DigiFormInputCustomEvent<HTMLInputElement>) => {
    handleSearchText(e.target.value.toString());
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
      <div className={inputFieldStyles.search_container}>
        <DigiFormInput
          afLabel='Sök efter arbetsgivare med namn eller organisationsnummer'
          afLabelDescription='T.ex. Arbetsförmedlingen'
          afValue={currentValue}
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.TEXT}
          onAfOnInput={handleChange}
          className={inputFieldStyles.searchfield}
        ></DigiFormInput>
        <DigiButton slot='button' onAfOnClick={onSubmit}>
          Sök
        </DigiButton>
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

export default Inputfield