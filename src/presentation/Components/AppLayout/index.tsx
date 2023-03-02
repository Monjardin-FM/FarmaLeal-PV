import React, { useRef, useState } from "react";
import { useToggle } from "react-use";
import useClickAway from "react-use/lib/useClickAway";
import { CiGrid41, CiLogout, CiUser } from "react-icons/ci";
import { Menu } from "../AppMenu/menu";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../modules/User/web/hooks/use-user";
import { AppButton } from "../AppButton";
import { AppContainerBox } from "../AppContainerBox";
import { useConvenio } from "../../../modules/Customer/web/hooks/useConvenio";
import { useMandato } from "../../../modules/Customer/web/hooks/useMandato";
import { useGetConvenioLocalStorage } from "../../../modules/Customer/web/hooks/useGetConvenioLocalStorage";
import { useGetMandatoLocalStorage } from "../../../modules/Customer/web/hooks/useGetMandatoLocalStorage";
import "../../../assets/css/background.css";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";

export const AppLayout = () => {
  const ref = useRef(null);
  const [on, toggle] = useToggle(false);
  const { user, signOut } = useUser();
  const { logOutCustomer } = useConvenio();
  const { logOutMandato } = useMandato();
  const { convenio } = useGetConvenioLocalStorage();
  const { mandato } = useGetMandatoLocalStorage();
  const [visible, setVisible] = useState(true);

  useClickAway(ref, () => toggle(false));

  const onHideUserInformation = () => {
    setVisible(!visible);
  };
  const variantsUserInformation = {
    visible: { opacity: 1, transition: { type: "spring", duration: 0.75 } },
    hidden: {
      opacity: 1,
      x: "96%",
      transition: { type: "spring", duration: 0.75 },
    },
  };
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

          <motion.div
            initial="visible"
            animate={visible ? "visible" : "hidden"}
            variants={variantsUserInformation}
            exit="hidden"
            className="z-10 absolute w-48 top-1 right-0.5 flex flex-row justify-center items-center  backdrop-filter  bg-clip-padding backdrop-blur-sm "
          >
            <div
              className={
                "  h-28 w-3 rounded-md border-l border-b border-t border-white  border-opacity-40 hover:border-opacity-40 hover:bg-white hover:bg-opacity-20 hover:cursor-pointer transition duration-300 "
              }
              onClick={() => {
                onHideUserInformation();
              }}
            >
              <div className="absolute top-1/2 text-white text-opacity-70 left-0">
                {visible ? (
                  <AiOutlineCaretRight size={15} />
                ) : (
                  <AiOutlineCaretLeft size={15} />
                )}
              </div>
            </div>
            <div>
              <AppContainerBox className="flex items-center justify-center p-2 text-xs gap-2">
                <div className="bg-white rounded-full p-2 bg-opacity-20">
                  <CiUser size="1.5rem" />
                </div>
                <div>{`${user.firstname} ${user.lastname} `}</div>

                <div className="flex flex-col">
                  <div className="text-gray-400">
                    Cliente:{" "}
                    <span className="font-semibold text-white">{` ${convenio?.descripcion}`}</span>
                  </div>
                  <div className="text-gray-400 w-fit ">
                    Sucursal:{" "}
                    <span className="font-semibold text-white">{` ${mandato?.descripcion}`}</span>
                  </div>
                </div>
                <div>
                  <AppButton
                    colorScheme="danger"
                    variant="ghost"
                    leftIcon={<CiLogout />}
                    onClick={() => {
                      signOut.execute();
                      logOutCustomer.execute();
                      logOutMandato.execute();
                    }}
                  >
                    Cerrar Sesión
                  </AppButton>
                </div>
              </AppContainerBox>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
