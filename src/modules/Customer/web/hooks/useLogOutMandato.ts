import { useAppDispatch } from "./../../../../utils/hooks/use-store";
import { logOutMandato } from "./mandate.reducer";
export const useLogOutMandate = () => {
  const dispatch = useAppDispatch();
  const execute = () => dispatch(logOutMandato());

  return { execute };
};
