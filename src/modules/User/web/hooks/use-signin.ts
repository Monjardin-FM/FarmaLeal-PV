import { signIn } from "./../user.reducer";
import { useAppDispatch } from "./../../../../utils/hooks/use-store";

export const useSignIn = () => {
  const dispatch = useAppDispatch();

  const execute = ({ email, password }: { email: string; password: string }) =>
    dispatch(signIn({ email, password }));

  return { execute };
};
