import { useContext } from "react";
import { AppTabsContext } from "./app-tabs-context";
import clsx from "clsx";

export type AppTabProps = React.ComponentPropsWithoutRef<"button"> & {
  tabPosition?: number;
  tabsLength?: number;
};

export const AppTab = ({
  className,
  children,
  tabPosition,
  tabsLength,
  ...props
}: AppTabProps) => {
  const ctx = useContext(AppTabsContext);

  return (
    <button
      onClick={() => {
        if (tabPosition !== undefined) ctx.onChange(tabPosition);
      }}
      className={clsx(
        "flex-grow text-sm appearance-none focus:outline-none px-6 py-1 border transition duration-500 font-medium disabled:cursor-not-allowed ",
        className,
        {
          "rounded-l-lg": tabPosition === 0,
          "rounded-r-lg":
            tabsLength !== undefined && tabPosition === tabsLength - 1,
          "text-info-900 border-info-300 bg-info-300 bg-opacity-100":
            ctx.index === tabPosition,
          "text-white border-gray-300 border-opacity-20 bg-white bg-opacity-5":
            ctx.index !== tabPosition,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

AppTab.displayName = "AppTab";
