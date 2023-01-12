import { Mandate } from "./../domain/entities/mandate";
import { verifyResponse } from "./../../../utils/check-response";
import { token } from "./../../../utils/token";
import { api } from "./../../../utils/api";
import { MandateRepository } from "./../domain/repositories/mandate-repository";

export const getMandatesByCustomer: MandateRepository["getMandatesByCustomer"] =
  async ({ idConvenio: params }) => {
    const response = await api().get("Catalog/GetCatalogoMandato", {
      headers: { Authorization: `Bearer ${token()}` },
      searchParams: {
        idConvenio: params,
      },
    });

    const { body } = await verifyResponse({ response });
    const data = body.data as any[];

    const mandates = data.map<Mandate>((m) => ({
      idMandato: m.idMandato,
      descripcion: m.descripcion,
    }));

    return mandates;
  };
