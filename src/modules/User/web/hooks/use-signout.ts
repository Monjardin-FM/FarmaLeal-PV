import { signOut } from "../user.reducer";
import { useAppDispatch } from "./../../../../utils/hooks/use-store";

export const useSignOut = () => {
  const dispatch = useAppDispatch();

  const execute = () => dispatch(signOut());

  return { execute };
};
