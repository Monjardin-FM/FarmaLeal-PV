import { Customer } from "./../domain/entities/customer";
import { verifyResponse } from "./../../../utils/check-response";
import { token } from "./../../../utils/token";
import { api } from "./../../../utils/api";
import { CustomerRepository } from "./../domain/repositories/cutomer-repository";

export const getCustomers: CustomerRepository["getCustomers"] = async () => {
  const response = await api().get("Catalog/GetCatalogoConvenio", {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });
  const { body } = await verifyResponse({ response });
  const data = body.data as any[];

  const customers = data.map<Customer>((c) => ({
    idConvenio: c.idConvenio,
    descripcion: c.descripcion,
  }));
  return customers;
};
