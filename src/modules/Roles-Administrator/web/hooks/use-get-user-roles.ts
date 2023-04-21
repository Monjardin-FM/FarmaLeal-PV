import { useAsyncFn } from "react-use";
import { UserRolesRepository } from "../../domain/repository/UserRolesRepository";
import { getUserRoles } from "../../infraestructure/getUserRoles";

export const useGetUserRoles = () => {
  const [{ value: userRoles, loading, error }, getAllUserRoles] = useAsyncFn<
    UserRolesRepository["getUserRole"]
  >(getUserRoles, [getUserRoles]);
  return {
    userRoles,
    loading,
    error,
    getAllUserRoles,
  };
};
