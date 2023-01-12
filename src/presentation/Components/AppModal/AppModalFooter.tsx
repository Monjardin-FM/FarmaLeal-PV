import React from "react";
import classNames from "classnames";

export interface AppModalFotterProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const AppModalFooter = ({
  children,
  className,
  ...props
}: AppModalFotterProps) => (
  <div
    className={classNames(
      "px-3 py-4 font-medium flex justify-end items-center rounded-b-md space-x-6 border-t border-t-primary-50 border-opacity-5",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
