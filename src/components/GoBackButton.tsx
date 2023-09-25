import { useLocation, useNavigate } from "react-router-dom";
import buttonStyles from '../styles/goBackButton.module.css'
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen"
import { DigiButton, DigiIcon, } from "@digi/arbetsformedlingen-react"

export const GoBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = searchParams.get("page") || "1";
  const currentResults = searchParams.get("result") || "10";

  console.log('currentpage', currentPage);
  console.log('currentresult', currentResults);
  console.log(location.pathname);
  
  
  
  const handleNavigate = () => {
    navigate(`/search-results?page=${currentPage}&result=${currentResults}`);
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




// import { useNavigate } from "react-router-dom"



// export const GoBackButton = () => {
//     const navigate = useNavigate()
//     const handleNavigate = () => {
//         navigate("/search-results")
//     }
//   return (
//     <>
//     <div className={buttonStyles.button}>
//     <DigiButton
//         afSize={ButtonSize.MEDIUM}
//         afVariation={ButtonVariation.SECONDARY}
//         afFullWidth={false}
//         onAfOnClick={handleNavigate}
        
//         >
//         Tillbaka
//     <DigiIcon slot='icon' afName="chevron-left"></DigiIcon> 
//     </DigiButton>
//     </div>
//     </>
//   )
// }
