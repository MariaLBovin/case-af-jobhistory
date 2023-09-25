import { useNavigate, useParams } from "react-router-dom";
import buttonStyles from '../styles/goBackButton.module.css'
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen"
import { DigiButton, DigiIcon, } from "@digi/arbetsformedlingen-react"

export const GoBackButton = () => {
  const navigate = useNavigate();

  const {page, result} = useParams()

  const handleNavigate = () => {
    console.log('currentpage', page);
    console.log('currentresult', result);
    navigate(`/search-results/${page}/${result}`);
  };

  return (
    <div className={buttonStyles.button}>
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.SECONDARY}
        afFullWidth={false}
        onAfOnClick={handleNavigate}
      >
        Tillbaka
        <DigiIcon slot='icon' afName="chevron-left"></DigiIcon> 
      </DigiButton>
    </div>
  );
}


