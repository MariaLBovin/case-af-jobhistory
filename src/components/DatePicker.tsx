import { useState } from 'react';
import datePickerStyles from '../styles/DatePicker.module.css';
import { DateSelector } from './DateSelector';

export interface ISearchDates {
	from?: string;
	to?: string;
}

export interface IDateSelectorProps {
	selectedDates: (dates: ISearchDates) => void;
}

export const DatePicker = ({ selectedDates }: IDateSelectorProps) => {
	const fromLabel = 'Från när vill du söka?';
	const toLabel = 'Till när vill du söka?';

	const [minDate, setMinDate] = useState<Date>();
	const [maxDate, setMaxDate] = useState<Date>();

	const selectedFrom = (dateFrom: string) => {
		setMinDate(new Date(dateFrom));
		selectedDates({ from: dateFrom });
	};

	const slectedTo = (dateTo: string) => {
		setMaxDate(new Date(dateTo));
		selectedDates({ to: dateTo });
	};

	return (
		<div className={datePickerStyles.datePickerWrapper}>
			<div>
				<label
					className={datePickerStyles.visuallyHidden}
					htmlFor='selected-date-from'
				>
					Från när vill du söka?
				</label>
				<DateSelector
					label={fromLabel}
					id='selected-date-from'
					maxDate={maxDate}
					selectedDate={selectedFrom}
				/>
			</div>
			<div>
				<label
					className={datePickerStyles.visuallyHidden}
					htmlFor='selected-date-to'
				>
					Till när vill du söka?
				</label>
				<DateSelector
					label={toLabel}
					id='selected-date-to'
					minDate={minDate}
					maxDate={new Date()}
					selectedDate={slectedTo}
				/>
			</div>
		</div>
	);
};
