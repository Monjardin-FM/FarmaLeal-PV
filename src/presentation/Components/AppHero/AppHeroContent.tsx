import clsx from "clsx";
import React from "react";
export type AppHeroContentProps = React.ComponentPropsWithoutRef<"div">;

export const AppHeroContent = ({
  children,
  className,
  ...props
}: AppHeroContentProps) => (
  <div className={clsx("mx-auto", className)}>{children}</div>
);
