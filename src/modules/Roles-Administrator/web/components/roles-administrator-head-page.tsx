import React, { useEffect, useState } from "react";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import { AppHeading } from "../../../../presentation/Components/AppHeading";
import { UserRoles } from "../../domain/entities/UserRoles";
import "react-datalist-input/dist/styles.css";
import AppTextField from "../../../../presentation/Components/AppTextField";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CiUser } from "react-icons/ci";
import clsx from "clsx";
type RolesAdministratorHeadPageProps = {
  setSearch: (search: string) => void;
  usersList?: UserRoles[];
  searchUser: string;
  fullSearch: (fullSearch: string) => void;
};

export const RolesAdministratorHeadPage = ({
  setSearch,
  usersList = [],
  searchUser,
  fullSearch,
}: RolesAdministratorHeadPageProps) => {
  const [parent] = useAutoAnimate({ duration: 300 });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const handleClose = () => {
    setIsVisible(false);
    setSelectedItem(0);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    } else if (e.key === "ArrowDown" && selectedItem < usersList.length - 1) {
      setSelectedItem((prev) => prev + 1);
    } else if (e.key === "Enter" && selectedItem >= 0) {
      setSearch(usersList[selectedItem].nombre);
      fullSearch(usersList[selectedItem].nombre);
      setSelectedItem(0);
    }
  };

  useEffect(() => {
    if (searchUser !== "") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    if (searchUser === usersList[0]?.nombre) {
      setIsVisible(false);
    }
  }, [searchUser, usersList]);
  return (
    <div className="col-span-6 col-start-4 flex flex-col items-center justify-center top-1 relative">
      <AppContainerBox className="flex flex-col justify-center items-center p-7 gap-5 h-40">
        <div className="absolute top-5">
          <AppHeading>Asignación de Roles</AppHeading>
        </div>
        <section className="absolute flex flex-col justify-center items-center w-full top-14">
          <div className="w-6/12 flex flex-row items-center justify-center gap-5 ">
            <div className="fles flex-col w-full">
              <AppTextField
                placeholder="Nombre del usuario"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                list="users"
                name="users"
                role="combobox"
                value={searchUser}
                onKeyDown={(e) => handleKeyDown(e)}
              />

              {isVisible && (
                <div
                  className="bg-black bg-opacity-60 text-white w-full   border border-white border-opacity-30 rounded-lg relative cursor-pointer"
                  ref={parent}
                >
                  {usersList.map((user, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "block border border-white border-opacity-10 p-2 hover:bg-white hover:bg-opacity-20 transition duration-200 ",
                        selectedItem === index ? "bg-white bg-opacity-20" : ""
                      )}
                      onClick={() => {
                        handleClose();
                        setSearch(user.nombre);
                        fullSearch(user.nombre);
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center">
                        <CiUser size={18} />
                        <span className="text-sm font-light">
                          {user.nombre}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </AppContainerBox>
    </div>
  );
};
