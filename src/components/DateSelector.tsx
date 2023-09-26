import { DigiCalendarDatepicker } from "@digi/arbetsformedlingen-react";
import { DigiCalendarDatepickerCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import dateSelectorStyles from "@/styles/DateSelector.module.css";

interface IDateSelectorProps {
  selectedDate: (date: string) => void;
  id: string;
  label: string;
  maxDate?: Date;
  minDate?: Date;
}

export const DateSelector = ({
  selectedDate,
  id,
  label,
  maxDate,
  minDate,
}: IDateSelectorProps) => {
  const handleSelectedDateFrom = (
    e: DigiCalendarDatepickerCustomEvent<Array<Date>>
  ) => {
    const result = e.detail[0].toLocaleDateString("sv-SE");

    selectedDate(result);
  };

  return (
    <>
      <DigiCalendarDatepicker
        id={id}
        className={dateSelectorStyles.date_selector}
        afShowWeekNumber={false}
        afCloseOnSelect={true}
        afLabel={label}
        afMaxDate={maxDate}
        afMinDate={minDate}
        onAfOnDateChange={handleSelectedDateFrom}
      ></DigiCalendarDatepicker>
    </>
  );
};
