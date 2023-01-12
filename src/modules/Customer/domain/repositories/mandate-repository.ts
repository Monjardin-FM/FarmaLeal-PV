import { Mandate } from "./../entities/mandate";

export type MandateRepository = {
  getMandatesByCustomer(params: { idConvenio: number }): Promise<Mandate[]>;
};
