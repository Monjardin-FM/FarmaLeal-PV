export interface AppTrProps extends React.ComponentPropsWithoutRef<"tr"> {}

export const AppTr = ({ children, ...props }: AppTrProps) => (
  <tr className="" {...props}>
    {children}
  </tr>
);
