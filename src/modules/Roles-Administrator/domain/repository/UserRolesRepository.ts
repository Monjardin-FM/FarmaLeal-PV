import { UserRoles } from "../entities/UserRoles";

export type UserRolesRepository = {
  getUserRole(params: { nameUser: string }): Promise<UserRoles[]>;
};
