import { useUser } from "./../../modules/User/web/hooks/use-user";
import { UserRole } from "./../../modules/User/domain/entities/user-role";
import { useEffect, useState } from "react";

export type UseAuthorizationGuardProps = {
  roles?: UserRole[];
};

export const useAuthorizationGuard = ({
  roles = [],
}: UseAuthorizationGuardProps) => {
  const [isValid, setValid] = useState<boolean>(false);
  const [fetched, setFetched] = useState<boolean>(false);
  const { user } = useUser();

  useEffect(() => {
    const res = roles.some((item) => user?.roles.some((i) => i === item));
    setValid(res);
    setFetched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fetched, isValid];
};
