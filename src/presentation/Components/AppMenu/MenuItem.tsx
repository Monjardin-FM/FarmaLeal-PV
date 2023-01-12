import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import clsx from "clsx";

export interface AppMenuItemprops
  extends React.ComponentPropsWithoutRef<"div"> {
  lottie: any;
  label: string;
  to: string;
  onClose: () => void;
}

export const MenuItemLink = ({
  children,
  className,
  lottie,
  label,
  to,
  onClose,
  ...props
}: AppMenuItemprops) => {
  return (
    <Link
      to={to}
      className={clsx(
        " flex justify-center items-center col-span-3 border border-gray-100 border-opacity-10 w-full h-40 rounded-md bg-black bg-opacity-40 text-primary-400 font-semibold text-base hover:cursor-pointer hover:bg-primary-600 hover:bg-opacity-75 hover:text-white hover:scale-95 transition duration-200",
        className
      )}
      onClick={() => onClose()}
    >
      <div {...props}>
        {children}
        <div className="flex flex-col justify-center items-center">
          <div className="w-16 h-8 mb-12">
            <Player
              src={lottie}
              autoplay
              loop
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div>{label}</div>
        </div>
      </div>
    </Link>
  );
};
