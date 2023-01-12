import { Mandate } from "./../../domain/entities/mandate";
export const useGetMandatoLocalStorage = () => {
  const mandatoStored = localStorage.getItem("mandato");
  const mandato: Mandate = mandatoStored ? JSON.parse(mandatoStored) : null;
  return { mandato };
};
