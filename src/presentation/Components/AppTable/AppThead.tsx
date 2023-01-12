import classNames from "classnames";

export interface AppTheadProps
  extends React.ComponentPropsWithoutRef<"thead"> {}

export const AppThead = ({ children, className, ...props }: AppTheadProps) => (
  <thead
    className={classNames("bg-gray-100 bg-opacity-30", className)}
    {...props}
  >
    {children}
  </thead>
);
