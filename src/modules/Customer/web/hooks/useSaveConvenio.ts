import { Customer } from "./../../domain/entities/customer";
import { useAppDispatch } from "./../../../../utils/hooks/use-store";
import { save } from "./convenio.reducer";
export const useSaveConvenio = () => {
  const dispatch = useAppDispatch();

  const execute = (convenio: Customer) => dispatch(save({ convenio }));

  return { execute };
};
