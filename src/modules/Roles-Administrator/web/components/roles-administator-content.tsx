import React from "react";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import { CiUser } from "react-icons/ci";
import { UserRoles } from "../../domain/entities/UserRoles";
import { Roles } from "../../domain/entities/Roles";

type RolesAdministratorContentProps = {
  searchUser: string;
  userRoles: UserRoles[] | undefined;
  roles: Roles[] | undefined;
};

export const RolesAdministratorContent = ({
  searchUser,
  userRoles,
  roles,
}: RolesAdministratorContentProps) => {
  return (
    <div className="col-span-12 flex flex-col  items-center">
      <div className="w-8/12">
        <AppContainerBox className="text-gray-300 text-xl p-5 items-center gap-5">
          <div className="flex flex-row items-center gap-5">
            <div className="rounded-full p-2 border border-gray-300">
              <CiUser size={25} />
            </div>
            <span>{searchUser}</span>
          </div>
          <div className="flex gap-1 flex-wrap">
            {userRoles?.map((item, index) => (
              <div className="text-sm border border-white p-3 bg-success-700">
                {item.descripcion}
              </div>
            ))}
          </div>
          <div className="flex gap-1 overflow-x-auto flex-wrap">
            {roles?.map((item, index) => (
              <div className="text-sm border border-white p-3 bg-danger-700">
                {item.descripcion}
              </div>
            ))}
          </div>
        </AppContainerBox>
      </div>
    </div>
  );
};
