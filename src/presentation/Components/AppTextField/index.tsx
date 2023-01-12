import clsx from "clsx";
import { AppInput, AppInputProps } from "../AppInput";

export type AppTextFieldProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "children" | "className"
> &
  AppInputProps;

const AppTextField = ({
  required,
  type = "text",
  className,
  onWheel,
  ...props
}: AppTextFieldProps) => {
  return (
    <input
      type={type}
      className={clsx("form-input text-sm", className)}
      onWheel={(event) => {
        if (onWheel) onWheel(event);
        else if (type === "number") event.currentTarget.blur();
      }}
      {...props}
    />
  );
};

export default AppInput(AppTextField);
