import { Mandate } from "./../../domain/entities/mandate";
import { useAppDispatch } from "./../../../../utils/hooks/use-store";
import { saveMandate } from "./mandate.reducer";
export const useSaveMandato = () => {
  const dispatch = useAppDispatch();

  const execute = (payload: { mandato: Mandate }) =>
    dispatch(saveMandate(payload));

  return { execute };
};
