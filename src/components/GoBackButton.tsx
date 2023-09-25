import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen"
import { DigiButton, DigiIcon, } from "@digi/arbetsformedlingen-react"
import { useNavigate } from "react-router-dom"
import buttonStyles from '../styles/goBackButton.module.css'


export const GoBackButton = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/search-results")
    }
  return (
    <>
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
    </>
  )
}
