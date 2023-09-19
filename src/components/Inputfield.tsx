
import { FormInputType, FormInputVariation, FormValidationMessageVariation } from '@digi/arbetsformedlingen'
import { DigiButton, DigiFormInput, DigiFormValidationMessage } from '@digi/arbetsformedlingen-react'
import searchStyles from '../styles/search.module.css'
import { FieldValues, useForm } from 'react-hook-form'
import { useState } from 'react'
import { DigiFormInputCustomEvent, } from '@digi/arbetsformedlingen/dist/types/components'

interface IInputfieldProps {
    handleValue: (value: string | number) => void
}

export const Inputfield = ({handleValue} :IInputfieldProps) => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors, isSubmitting },
    //     reset,
    //   } = useForm();

    const [userInput, setUserInput] = useState<string | number>('')
    const [buttonClicked, setButtonClicked] =useState(false)

    const handleChange = (e: DigiFormInputCustomEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
    }

    const onSubmit = () => {
        setButtonClicked(true);

        if (userInput !== '') {
            handleValue(userInput);
            setUserInput('');
          
        // handleValue(userInput)
        // setUserInput('')
    }
}
    

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
    // {...register('Sökord', {
    //     required: 'Du måste ange ett sökord'
    // })}
    >
        {/* {errors.TEXT && (
        <p className="text-red-500">{`${errors.TEXT.message}`}</p>
      )} */}
        <DigiButton slot='button'
        onAfOnClick={onSubmit}
        >Sök</DigiButton>
      
    </DigiFormInput>    
    {buttonClicked && userInput === '' ? (
        <DigiFormValidationMessage afVariation={FormValidationMessageVariation.ERROR}>Fältet får inte vara tomt</DigiFormValidationMessage>
      ) : null}
    </div>
    
</>
  )
}
