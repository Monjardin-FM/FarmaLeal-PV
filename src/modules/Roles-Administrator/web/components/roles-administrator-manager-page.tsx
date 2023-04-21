import React, { useEffect, useState } from "react";
import { RolesAdministratorHeadPage } from "./roles-administrator-head-page";
import { useSearchRoles } from "../hooks/use-get-roles";
import { useGetUserRoles } from "../hooks/use-get-user-roles";
import { UserRoles } from "../../domain/entities/UserRoles";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CiUser } from "react-icons/ci";
import { RolesAdministratorContent } from "./roles-administator-content";

export const RolesAdministratorManagerPage = () => {
  const { getAllUserRoles, userRoles } = useGetUserRoles();
  const { roles, getAllRoles } = useSearchRoles();
  const [searchUser, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserRoles[]>();
  const [infoVisible, setInfoVisible] = useState(false);
  const [parent] = useAutoAnimate({ duration: 300 });

  //Function that eliminates the duplicated registers
  const filterUsers = (userRolesWF: UserRoles[]) => {
    const hash: any = {};
    userRolesWF = userRolesWF.filter((current) => {
      const exists = !hash[current.idPersona];
      hash[current.idPersona] = true;
      return exists;
    });
    setFilteredUsers(userRolesWF);
  };
  const fullSearch = (fullName: string) => {
    getAllUserRoles({ nameUser: fullName });
  };

  useEffect(() => {
    getAllRoles();
  }, []);

  useEffect(() => {
    if (searchUser !== "") {
      const timeDelay = setTimeout(() => {
        getAllUserRoles({ nameUser: searchUser });
      }, 200);
      return () => {
        clearTimeout(timeDelay);
      };
    }
  }, [searchUser]);

  useEffect(() => {
    filterUsers(userRoles ?? []);
    if (userRoles) {
      const flag = userRoles?.some((current) => current.nombre === searchUser);
      setInfoVisible(flag);
    }
  }, [userRoles, searchUser]);

  return (
    <div className="grid grid-cols-12 gap-5">
      <RolesAdministratorHeadPage
        setSearch={setSearch}
        usersList={filteredUsers}
        searchUser={searchUser}
        fullSearch={fullSearch}
      />
      {infoVisible && (
        <RolesAdministratorContent
          searchUser={searchUser}
          userRoles={userRoles}
          roles={roles}
        />
      )}
    </div>
  );
};
