import { Roles } from "../entities/Roles";

export type RolesRepository = {
  getRoles(): Promise<Roles[]>;
};
