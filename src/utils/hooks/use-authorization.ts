import { useUser } from "./../../modules/User/web/hooks/use-user";
import { useEffect, useState } from "react";
import { UserRole } from "./../../modules/User/domain/entities/user-role";

export type UseRoleParams = {
  initialValue?: boolean;
  roles?: UserRole[];
};

export const useAUthorization = ({
  initialValue = true,
  roles = [],
}: UseRoleParams = {}) => {
  const { user } = useUser();
  const [isAuthorized, setAuthorized] = useState<Boolean>(initialValue);

  useEffect(() => {
    if (user) {
      const isValid = roles.some((item) => user?.roles.some((i) => i === item));
      setAuthorized(isValid);
    }
  }, [roles, user]);

  return [isAuthorized];
};
