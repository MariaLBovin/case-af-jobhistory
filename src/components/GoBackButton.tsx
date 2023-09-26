import { useLocation, useNavigate} from "react-router-dom";
import buttonStyles from '../styles/GoBackButton.module.css'
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen"
import { DigiButton, DigiIcon, } from "@digi/arbetsformedlingen-react"



export const GoBackButton = () => {
  const navigate = useNavigate();
  
  const location = useLocation()

  const handleNavigate = () => {
    navigate(-1)
  };

  return (
    <div className={location.pathname === '/contact' ? buttonStyles.contactButton : buttonStyles.button}>
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


