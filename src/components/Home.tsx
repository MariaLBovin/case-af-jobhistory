import { ButtonVariation } from '@digi/arbetsformedlingen';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { DateSelector } from './DateSelector';

const Home = () => {
	const handleClick = () => console.log('You clicked me');

	return (
		<div>
			<DigiButton
				onAfOnClick={handleClick}
				afVariation={ButtonVariation.PRIMARY}
			>
				Klicka
			</DigiButton>
			<DateSelector />
		</div>
	);
};

export default Home;
