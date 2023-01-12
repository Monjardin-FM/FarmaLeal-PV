import { getCustomers } from "./../../infraestructure/get-customers-service";
import { CustomerRepository } from "./../../domain/repositories/cutomer-repository";
import { useAsyncFn } from "react-use";

export const useGetCustomers = () => {
  const [{ value: customers, loading, error }, getCustomer] = useAsyncFn<
    CustomerRepository["getCustomers"]
  >(getCustomers, [getCustomers]);

  return {
    customers,
    loading,
    error,
    getCustomer,
  };
};
