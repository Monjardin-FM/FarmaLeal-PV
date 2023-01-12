import { Customer } from "./../entities/customer";

export type CustomerRepository = {
  getCustomers(): Promise<Customer[]>;
};
