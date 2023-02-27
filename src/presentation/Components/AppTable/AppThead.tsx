import classNames from "classnames";

export interface AppTheadProps
  extends React.ComponentPropsWithoutRef<"thead"> {}

export const AppThead = ({ children, className, ...props }: AppTheadProps) => (
  <thead
    className={classNames("bg-primary-900 bg-opacity-95", className)}
    {...props}
  >
    {children}
  </thead>
);
