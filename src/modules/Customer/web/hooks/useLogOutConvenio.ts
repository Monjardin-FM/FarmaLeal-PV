import { useAppDispatch } from "./../../../../utils/hooks/use-store";
import { logOutCustomer } from "./convenio.reducer";
export const useLogOutCustomer = () => {
  const dispatch = useAppDispatch();

  const execute = () => dispatch(logOutCustomer());

  return { execute };
};
