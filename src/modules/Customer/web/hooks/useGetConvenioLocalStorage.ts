import { Customer } from "./../../domain/entities/customer";
export const useGetConvenioLocalStorage = () => {
  const convenioStored = localStorage.getItem("convenio");
  const convenio: Customer = convenioStored ? JSON.parse(convenioStored) : null;
  return { convenio };
};
