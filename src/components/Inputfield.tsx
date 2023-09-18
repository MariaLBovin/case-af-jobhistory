
import { ButtonType, ButtonVariation, FormInputSearchVariation, FormInputType, FormInputValidation, FormInputVariation } from '@digi/arbetsformedlingen'
import { DigiButton, DigiFormInput, DigiFormInputSearch } from '@digi/arbetsformedlingen-react'
import searchStyles from '../styles/search.module.css'
import { FieldValues, useForm } from 'react-hook-form'


export const Inputfield = () => {
    const {register, handleSubmit, formState: {errors}, reset, getValues}=useForm()

    const onSubmit = (data :FieldValues) => {
        console.log(data);
        reset()
        
    }

  return (
    <>
    <div className={searchStyles.search_container}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <DigiFormInput
	afLabel="Etikett"
	afVariation={FormInputVariation.MEDIUM}
	afType={FormInputType.TEXT}
	afValidation={FormInputValidation.NEUTRAL}	
    // {...register('Arbetsgivare', 
    // {required: 'Sökord krävs',
    // minLength: {
    //     value: 3,
    //     message: 'Du behöver ange ett sökord'
    // }
    // })}
    
>   
{/* {errors.search && (
        <p>{`${errors.search.message}`}</p>
        )}		 */}
        
    </DigiFormInput>
    <DigiButton
        onAfOnClick={onSubmit}
        afVariation={ButtonVariation.PRIMARY}
      >
        Klicka
      </DigiButton>
    </form>
    {/* <DigiFormInputSearch
	afLabel="Sök arbetsgivare med namn"
	afVariation={FormInputSearchVariation.MEDIUM}
	afType={FormInputType.SEARCH}	
    afLabelDescription="T.ex. Arbetsförmedlingen"	
	afButtonText="Sök"
    afButtonType= {ButtonType.SUBMIT}
    onClick={handleSubmit(onSubmit)}
    className={searchStyles.searchfield}
    {...register('Arbetsgivare', 
    {required: 'Sökord krävs',
    minLength: {
        value: 3,
        message: 'Du behöver ange ett sökord'
    }
    })}
    
>   {errors.search && (
        <p>{`${errors.search.message}`}</p>
        )}
    </DigiFormInputSearch> */}
    </div>
    
</>
  )
}
