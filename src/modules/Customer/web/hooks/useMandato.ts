import { useLogOutMandate } from "./useLogOutMandato";
import { useSaveMandato } from "./useSaveMandato";
import { useAppSelector } from "./../../../../utils/hooks/use-store";
export const useMandato = () => {
  const { value, error, loading } = useAppSelector((state) => state.mandato);
  const saveMandato = useSaveMandato();
  const logOutMandato = useLogOutMandate();

  return {
    saveMandato,
    logOutMandato,
    mandato: value,
    loading: loading,
    error: error,
  };
};
