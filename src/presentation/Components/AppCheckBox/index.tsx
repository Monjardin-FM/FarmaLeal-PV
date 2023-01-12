import clsx from "clsx";

export type AppCheckBoxProps = React.ComponentPropsWithoutRef<"input">;

export const AppCheckBox = ({
  children,
  className,
  ...props
}: AppCheckBoxProps) => (
  <label>
    <input
      type="checkbox"
      className={clsx("form-checkbox rounded-xl", className)}
      {...props}
    />
    <span className="ml-2">{children}</span>
  </label>
);
