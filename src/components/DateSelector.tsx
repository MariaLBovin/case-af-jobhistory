import { DigiCalendarDatepicker } from '@digi/arbetsformedlingen-react';
import { DigiCalendarDatepickerCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

interface IDateSelectorProps {
	selectedDate: (date: string) => void;
}

export const DateSelector = ({ selectedDate }: IDateSelectorProps) => {
	const handleSelectedDateFrom = (
		e: DigiCalendarDatepickerCustomEvent<Array<Date>>
	) => {
		const result = e.detail[0].toLocaleDateString('sv-SE');

		selectedDate(result);
	};

	return (
		<>
			<DigiCalendarDatepicker
				className='date-selector'
				afShowWeekNumber={false}
				af-close-on-select={true}
				onAfOnDateChange={handleSelectedDateFrom}
			></DigiCalendarDatepicker>
		</>
	);
};
