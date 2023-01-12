import { useLogOutCustomer } from "./useLogOutConvenio";
import { useSaveConvenio } from "./useSaveConvenio";
import { useAppSelector } from "./../../../../utils/hooks/use-store";
export const useConvenio = () => {
  const { value, error, loading } = useAppSelector((state) => state.convenio);
  const saveConvenio = useSaveConvenio();
  const logOutCustomer = useLogOutCustomer();
  return {
    saveConvenio,
    logOutCustomer,
    convenio: value,
    loading: loading,
    error: error,
  };
};
