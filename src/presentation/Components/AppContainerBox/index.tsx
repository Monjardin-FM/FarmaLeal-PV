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
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-20 container">
        <div
          className={clsx(
            "flex flex-col  border border-gray-50 border-opacity-20 text-gray-100 font-normal p-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md ",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
