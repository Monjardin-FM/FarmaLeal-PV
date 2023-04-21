import { api } from "../../../utils/api";
import { verifyResponse } from "../../../utils/check-response";
import { token } from "../../../utils/token";
import { Roles } from "../domain/entities/Roles";
import { RolesRepository } from "../domain/repository/RolesRepository";

export const getRoles: RolesRepository["getRoles"] = async () => {
  const response = await api().get(`Security/Roles`, {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });
  const { body } = await verifyResponse({ response });
  const data = body.data as any[];
  const Roles = data.map<Roles>((c) => ({
    idRole: c.idRole,
    descripcion: c.descripcion,
  }));
  return Roles;
};
