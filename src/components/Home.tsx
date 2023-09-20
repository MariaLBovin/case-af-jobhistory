import { ButtonVariation } from '@digi/arbetsformedlingen';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { DatePicker, ISearchDates } from './DatePicker';

const Home = () => {
	const handleClick = () => console.log('You clicked me');

	const datesFromUser = (dates: ISearchDates) => {
		console.log(dates);
	};

	return (
		<>
			<div>
				<DigiButton
					onAfOnClick={handleClick}
					afVariation={ButtonVariation.PRIMARY}
				>
					Klicka
				</DigiButton>
			</div>
			<DatePicker selectedDates={datesFromUser} />
		</>
	);
};

export default Home;
