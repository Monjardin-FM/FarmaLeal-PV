import React, { useRef, useState } from "react";
import { useToggle } from "react-use";
import useClickAway from "react-use/lib/useClickAway";
import { CiGrid41 } from "react-icons/ci";
import { Menu } from "../AppMenu/menu";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../modules/User/web/hooks/use-user";

import "../../../assets/css/background.css";
import { UserInformation } from "./UserInformation";

export const AppLayout = () => {
  const ref = useRef(null);
  const [on, toggle] = useToggle(false);
  const { user, signOut } = useUser();

  useClickAway(ref, () => toggle(false));

  return (
    <>
      {!user ? (
        <Navigate to={"/sign"} />
      ) : (
        <div className="w-full min-h-screen bg-animated overflow-hidden absolute">
          <div className=" w-full  min-h-screen">
            <Outlet />
          </div>
          <button
            onClick={() => toggle(true)}
            style={{ left: 16, top: 16 }}
            className="bg-primary-500 p-3 rounded-full text-white top-20 left-20 inline-block absolute shadow-lg appearance-none focus:outline=none hover:bg-white hover:text-gray-700 transition duration-300"
          >
            <CiGrid41 size={25} />
          </button>
          <Menu
            isVisible={on}
            onClose={() => {
              toggle(false);
            }}
          />
          <UserInformation user={user} signOut={signOut} />
        </div>
      )}
    </>
  );
};
