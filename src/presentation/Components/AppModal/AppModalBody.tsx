import React from "react";
import classNames from "classnames";

export interface AppModalBodyProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const AppModalBody = ({
  children,
  className,
  ...props
}: AppModalBodyProps) => (
  <div className={classNames("px-6 py-3 ", className)} {...props}>
    {children}
  </div>
);
