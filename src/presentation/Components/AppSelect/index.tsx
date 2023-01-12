import clsx from "clsx";
import { AppInput, AppInputProps } from "../AppInput";

export type AppTextFieldProps = Omit<
  React.ComponentPropsWithoutRef<"select">,
  "children" | "className"
> &
  AppInputProps;

export type AppSelectProps = React.ComponentPropsWithoutRef<"select">;

const AppSelect = ({ children, className, ...props }: AppSelectProps) => {
  return (
    <select className={clsx("form-select text-xs ", className)} {...props}>
      {children}
    </select>
  );
};

export default AppInput(AppSelect);
