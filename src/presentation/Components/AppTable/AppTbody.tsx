export interface AppTbodyProps
  extends React.ComponentPropsWithoutRef<"tbody"> {}

export const AppTbody = ({ className, children, ...props }: AppTbodyProps) => (
  <tbody {...props}>{children}</tbody>
);
