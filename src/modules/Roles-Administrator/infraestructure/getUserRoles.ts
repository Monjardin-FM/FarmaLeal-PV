import { api } from "../../../utils/api";
import { verifyResponse } from "../../../utils/check-response";
import { token } from "../../../utils/token";
import { UserRoles } from "../domain/entities/UserRoles";
import { UserRolesRepository } from "../domain/repository/UserRolesRepository";

export const getUserRoles: UserRolesRepository["getUserRole"] = async ({
  nameUser: params,
}) => {
  const response = await api().get(`Security/UserRoles`, {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
    searchParams: {
      usuario: params,
    },
  });
  const { body } = await verifyResponse({ response });
  const data = body.data as any[];

  const userRoles = data.map<UserRoles>((c) => ({
    idRole: c.idRole,
    descripcion: c.descripcion,
    idPersona: c.idPersona,
    nombre: c.nombre,
  }));
  return userRoles;
};
