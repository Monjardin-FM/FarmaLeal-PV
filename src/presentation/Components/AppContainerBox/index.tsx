import clsx from "clsx";
import React from "react";

export interface AppContainerBoxProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const AppContainerBox = ({
  children,
  className,
  ...props
}: AppContainerBoxProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center  border border-gray-50 border-opacity-20 text-gray-100 font-normal p-2 rounded-md bg-black bg-opacity-20 backdrop-filter backdrop-blur-md shadow-black shadow-lg ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
