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
    <div className="flex justify-center min-w-full">
      <div className="bg-black bg-opacity-20 w-full">
        <div
          className={clsx(
            "flex flex-col  border border-gray-50 border-opacity-20 text-gray-100 font-normal rounded-md bg-clip-padding backdrop-filter backdrop-blur-md ",
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
