import { useState } from "react";
import datePickerStyles from "@/styles/DatePicker.module.css";
import { DateSelector } from "@/components/DateSelector";

export interface ISearchDates {
  from?: string;
  to?: string;
}

export interface IDateSelectorProps {
  handleSelectedDates: (dates: ISearchDates) => void;
}

export const DatePicker = ({ handleSelectedDates }: IDateSelectorProps) => {
  const fromLabel = "Från när vill du söka?";
  const toLabel = "Till när vill du söka?";

  const [minDate, setMinDate] = useState<Date>();
  const [maxDate, setMaxDate] = useState<Date>();

  const selectedFrom = (dateFrom: string) => {
    setMinDate(new Date(dateFrom));
    handleSelectedDates({ from: dateFrom });
  };

  const slectedTo = (dateTo: string) => {
    setMaxDate(new Date(dateTo));
    handleSelectedDates({ to: dateTo });
  };

  return (
    <div className={datePickerStyles.datePickerWrapper}>
      <div className={datePickerStyles.datePicker}>
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
      <div className={datePickerStyles.datePicker}>
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
