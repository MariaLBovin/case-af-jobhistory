
import { FormInputType, FormInputVariation, FormValidationMessageVariation } from '@digi/arbetsformedlingen'
import { DigiButton, DigiFormInput, DigiFormValidationMessage } from '@digi/arbetsformedlingen-react'
import searchStyles from '../styles/search.module.css'
import { useState } from 'react'
import { DigiFormInputCustomEvent, } from '@digi/arbetsformedlingen/dist/types/components'

interface IInputfieldProps {
    handleValue: (value: string) => void
}

export const Inputfield = ({handleValue} :IInputfieldProps) => {

    const [userInput, setUserInput] = useState<string>('')
    const [buttonClicked, setButtonClicked] =useState(false)
    //console.log(buttonClicked);

    const handleChange = (e: DigiFormInputCustomEvent<HTMLInputElement>) => {
        setUserInput(e.target.value.toString())
    }
 

    const onSubmit = () => {
        if (userInput.trim().length < 2) {
          setButtonClicked(true);
        } else {
          handleValue(userInput);
          setUserInput('');
          setButtonClicked(false);
        }
      };

  return (
    <>
    <div className={searchStyles.search_container}>
    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    <DigiFormInput
	afLabel="Sök efter arbetsgivare med namn eller organisationsnummer"
    afLabelDescription="T.ex. Arbetsförmedlingen"
    afValue={userInput}
	afVariation={FormInputVariation.MEDIUM}
	afType={FormInputType.TEXT}
    onAfOnInput={handleChange}
    >
        
        <DigiButton slot='button'
        onAfOnClick={onSubmit}
        >Sök</DigiButton>
        
    </DigiFormInput>
    {buttonClicked && userInput === '' && (
          <DigiFormValidationMessage afVariation={FormValidationMessageVariation.ERROR}>
            Fältet får inte vara tomt
          </DigiFormValidationMessage>
        )}
    </div>
</>
  )
}
