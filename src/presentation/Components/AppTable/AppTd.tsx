import classNames from "classnames";

export interface AppTdProps extends React.ComponentPropsWithoutRef<"td"> {
  type?: "numeric" | "text" | "custom";
  align?: "left" | "right" | "center";
}

export const AppTd = ({
  children,
  className,
  type = "text",
  align = "left",
  ...props
}: AppTdProps) => (
  <td
    className={classNames(
      "p-4 text-sm font-medium border-b border-opacity-20 border-b-gray-700",
      {
        "text-gray-100": type !== "custom",
        "tracking-wide": type === "numeric",
        "text-right": align === "right",
        "text-left": align === "left",
        "text-center": align === "center",
      },
      className
    )}
    {...props}
  >
    {children}
  </td>
);
