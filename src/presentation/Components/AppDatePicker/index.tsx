import React, { useContext } from "react";
import clsx from "clsx";
import es from "date-fns/locale/es";

import { AppInput, AppInputProps } from "../AppInput";
import { AppFormContext } from "../AppForm/AppFormContext";
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("es", es);

export type AppDatePickerProps = ReactDatePickerProps & AppInputProps;

const AppDatePicker = ({
  leftIcon,
  rightIcon,
  className,
  required,
  colorSchema = "primary",
  wrapperClassName,
  ...props
}: AppDatePickerProps) => {
  const { isRequired } = useContext(AppFormContext);
  return (
    <ReactDatePicker
      // locale="es"
      dateFormat="dd/MM/yyyy"
      className={clsx("form-input", className)}
      required={isRequired || required}
      wrapperClassName={clsx("w-full", wrapperClassName)}
      {...props}
    />
  );
};

export default AppInput(AppDatePicker);

// import React from "react";
// import clsx from "clsx";
// import { AppInputProps } from "../AppInput";
// import { AiOutlineCalendar } from "react-icons/ai";

// export type AppDatePickerProps = AppInputProps & {
//   onChange: (date: any) => void;
//   value: any;
//   id?: string;
//   name?: string;
// };

// export const AppDatePicker = ({
//   leftIcon,
//   id,
//   name,
//   rightIcon,
//   className,
//   colorSchema = "gray",
//   onChange,
//   value,
//   ...props
// }: AppDatePickerProps) => {
//   return (
//     <DatePicker
//       id={id}
//       name={name}
//       onChange={onChange}
//       value={value}
//       locale="es"
//       className={clsx(
//         "h-10 w-full text-center bg-black bg-opacity-40 text-white text-sm rounded-md self-center",
//         className
//       )}
//       {...props}
//       calendarIcon={<AiOutlineCalendar color="white" size={20} />}
//       calendarClassName="bg-white text-primary-800"
//       clearIcon={null as any}
//     />
//   );
// };
