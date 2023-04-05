import React from "react";
import clsx from "clsx";
import DatePicker from "react-date-picker";
import { AppInputProps } from "../AppInput";
import { AiOutlineCalendar } from "react-icons/ai";

export type AppDatePickerProps = AppInputProps & {
  onChange: (date: any) => void;
  value: any;
};

export const AppDatePicker = ({
  leftIcon,
  rightIcon,
  className,
  colorSchema = "gray",
  onChange,
  value,
  ...props
}: AppDatePickerProps) => {
  return (
    <DatePicker
      onChange={onChange}
      value={value}
      locale="es"
      className={clsx(
        "h-11 w-full text-center bg-black bg-opacity-40 text-white",
        className
      )}
      {...props}
      calendarIcon={<AiOutlineCalendar color="white" size={20} />}
      calendarClassName="bg-white text-primary-800"
      clearIcon={null as any}
    />
  );
};
