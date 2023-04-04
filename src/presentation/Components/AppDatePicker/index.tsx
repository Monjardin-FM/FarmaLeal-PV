import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import { AppInput, AppInputProps } from "../AppInput";
import clsx from "clsx";
import es from "date-fns/locale/es";

registerLocale("es", es);
export type AppDatePickerProps = ReactDatePickerProps & AppInputProps;

const AppDatePicker = ({
  leftIcon,
  rightIcon,
  className,
  required,
  colorSchema = "gray",
  wrapperClassName,
  ...props
}: AppDatePickerProps) => {
  return (
    <DatePicker
      locale="es"
      dateFormat="dd/MM/yyyy"
      className={clsx("form-input", className)}
      wrapperClassName={clsx("w-full", wrapperClassName)}
      {...props}
    />
  );
};

export default AppInput(AppDatePicker);
