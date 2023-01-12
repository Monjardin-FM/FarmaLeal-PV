import classNames from "classnames";

export interface AppTableProps
  extends React.ComponentPropsWithoutRef<"table"> {}

export const AppTable = ({ children, className, ...props }: AppTableProps) => {
  return (
    <div className=" rounded-lg shadow-xl border border-gray-50 border-opacity-5 ">
      <table className={classNames("table-auto w-full ", className)} {...props}>
        {children}
      </table>
    </div>
  );
};
