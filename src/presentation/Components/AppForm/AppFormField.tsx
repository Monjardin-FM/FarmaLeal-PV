import classNames from "classnames";

export interface AppFormFieldProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const AppFormField = ({
  children,
  className,
  ...props
}: AppFormFieldProps) => (
  <div className={classNames("w-full", className)} {...props}>
    {children}
  </div>
);
