import classNames from "classnames";

export interface AppFormLabelProps
  extends React.ComponentPropsWithoutRef<"label"> {}

export const AppFormLabel = ({
  children,
  className,
  htmlFor,
  ...props
}: AppFormLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "block pl-1 pb-1 text-gray-400 font-medium text-sm",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};
