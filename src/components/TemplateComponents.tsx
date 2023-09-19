import TCStyles from "../styles/TemplateComponents.module.css";

import {
  ButtonSize,
  ButtonVariation,
  FormInputSearchVariation,
  FormInputType,
  FormSelectValidation,
  FormSelectVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiCalendarDatepicker,
  DigiFormInputSearch,
  DigiFormSelect,
  DigiLayoutContainer,
  DigiNavigationPagination,
} from "@digi/arbetsformedlingen-react";
import { DigiIconArrowBack } from "@digi/arbetsformedlingen-react";

const TemplateComponents = () => {
  const handleClick = () => console.log("You clicked me");

  return (
    <div>
      <DigiLayoutContainer>
        <DigiButton
          onAfOnClick={handleClick}
          af-size={ButtonSize.MEDIUM}
          af-variation={ButtonVariation.SECONDARY}
          af-full-width={false}
        >
          Tillbaka
          <DigiIconArrowBack slot='icon' />
        </DigiButton>

        <DigiFormInputSearch
          afLabel='Hitta arbetsgivare via namn/org. nr.'
          afVariation={FormInputSearchVariation.LARGE}
          afType={FormInputType.SEARCH}
          afLabelDescription='T.ex. “Sveriges Television” eller “556033-4285”'
          afButtonText='Sök'
        ></DigiFormInputSearch>

        <span className={TCStyles.dateSelectorContainer}>
          <DigiCalendarDatepicker
            afLabel='Datum fr.o.m.'
            afLabelDescription=''
          />
          <DigiCalendarDatepicker
            afLabel='Datum t.o.m.'
            afLabelDescription=''
          />
        </span>

        <DigiFormSelect
          afLabel='Visa antal träffar'
          afVariation={FormSelectVariation.LARGE}
          afValidation={FormSelectValidation.NEUTRAL}
          afValue='show25'
        >
          <option value='show10'>10</option>
          <option value='show25'>25</option>
          <option value='show50'>50</option>
        </DigiFormSelect>

        <DigiNavigationPagination
          afTotalPages={3}
          afInitActive-page={1}
          afCurrentResultStart={1}
          afCurrentResultEnd={25}
          afTotalResults={5}
          afResultName='annonser'
        ></DigiNavigationPagination>
      </DigiLayoutContainer>
    </div>
  );
};

export default TemplateComponents;
