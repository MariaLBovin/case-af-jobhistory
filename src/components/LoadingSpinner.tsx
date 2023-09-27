import { LoaderSpinnerSize } from '@digi/arbetsformedlingen';
import { DigiLoaderSpinner } from '@digi/arbetsformedlingen-react';
import LoadingSpinnerStyles from '../styles/LoadingSpinner.module.css';

export const LoadingSpinner = () => {
	return (
		<>
			<DigiLoaderSpinner
				className={LoadingSpinnerStyles.loadingSpinner}
				afSize={LoaderSpinnerSize.MEDIUM}
			></DigiLoaderSpinner>
		</>
	);
};
