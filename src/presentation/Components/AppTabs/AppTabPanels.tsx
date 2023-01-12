import clsx from "clsx";
import { appTabMapper } from "./app-tab-mapper";

export type AppTabPanelProps = React.ComponentPropsWithoutRef<"div">;

export const AppTabPanels = ({
  children,
  className,
  ...props
}: AppTabPanelProps) => {
  return (
    <div className={clsx("mt-6", className)} {...props}>
      {appTabMapper({ children, componentName: "AppTabPanel" })}
    </div>
  );
};
