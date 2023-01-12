import clsx from "clsx";
import React from "react";

export type AppHeroProps = React.ComponentPropsWithoutRef<"div"> & {
  size?: "sm" | "base" | "lg" | "fullheight" | null;
};

export const AppHero = ({
  children,
  className,
  size = "base",
  ...props
}: AppHeroProps) => (
  <div className="flex justify-center">
    <div
      className={clsx(
        "w-7/12",
        {
          "h-36": size === "sm",
          "h-40": size === "base",
          "h-72": size === "lg",
          "min-h-screen": size === "fullheight",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  </div>
);
