import { getMandatesByCustomer } from "./../../infraestructure/get-mandates-service";
import { MandateRepository } from "./../../domain/repositories/mandate-repository";
import { useAsyncFn } from "react-use";
export const useGetMandates = () => {
  const [{ value: mandates, loading, error }, getMandates] = useAsyncFn<
    MandateRepository["getMandatesByCustomer"]
  >(getMandatesByCustomer, [getMandatesByCustomer]);
  return { mandates, loading, error, getMandates };
};
