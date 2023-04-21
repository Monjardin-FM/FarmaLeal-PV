import { useAsyncFn } from "react-use";
import { RolesRepository } from "../../domain/repository/RolesRepository";
import { getRoles } from "../../infraestructure/getRoles";

export const useSearchRoles = () => {
  const [{ value: roles, loading, error }, getAllRoles] = useAsyncFn<
    RolesRepository["getRoles"]
  >(getRoles, [getRoles]);

  return {
    roles,
    loading,
    error,
    getAllRoles,
  };
};
