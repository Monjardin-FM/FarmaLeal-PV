import React from "react";
import classNames from "classnames";
import { AppHeading, AppHeadingProps } from "../AppHeading";
import FarmaLealLogo from "../../../assets/img/farmaleal-logo.png";
export interface AppModalHeaderProps extends AppHeadingProps {}

export const AppModalHeader = ({
  children,
  className,
  ...props
}: AppModalHeaderProps) => (
  <div className="flex items-center justify-between px-6 py-5 border-b border-white border-opacity-10 rounded-t-md">
    <AppHeading
      as="h3"
      className={classNames(
        "text-gray-50 flex flex-row gap-3 justify-center items-center ",
        className
      )}
      {...props}
    >
      <img alt="FarmaLeal" src={FarmaLealLogo} className="w-14" />
      {children}
    </AppHeading>
  </div>
);
