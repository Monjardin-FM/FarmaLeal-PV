import React, { useRef, useState } from "react";
import { useToggle } from "react-use";
import useClickAway from "react-use/lib/useClickAway";
import { CiGrid41, CiLogout, CiUser } from "react-icons/ci";
import { Menu } from "../AppMenu/menu";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../modules/User/web/hooks/use-user";
import { AppButton } from "../AppButton";
import { AppPageTransition } from "../AppPageTransition";
import { AppContainerBox } from "../AppContainerBox";
import { useConvenio } from "../../../modules/Customer/web/hooks/useConvenio";
import { useMandato } from "../../../modules/Customer/web/hooks/useMandato";
import { useGetConvenioLocalStorage } from "../../../modules/Customer/web/hooks/useGetConvenioLocalStorage";
import { useGetMandatoLocalStorage } from "../../../modules/Customer/web/hooks/useGetMandatoLocalStorage";
import "../../../assets/css/background.css";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

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
  return (
    <>
      {!user ? (
        <Navigate to={"/sign"} />
      ) : (
        <AppPageTransition>
          <div className="w-full min-h-screen bg-animated">
            <div
              className="w-full  min-h-screen"
              // style={{ background: "#222" }}
            >
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

            <div className="absolute top-1 right-1 h-56 gap-y-3 flex flex-col justify-center items-end w-48 ">
              <div
                className={clsx(
                  "absolute  z-30  h-40 w-3 rounded-md border-l border-b border-t border-white  border-opacity-10 hover:border-opacity-40 hover:bg-white hover:bg-opacity-20 hover:cursor-pointer transition duration-200",
                  {
                    "left-4 transition": visible === true,
                    "right-0 transition": visible === false,
                  }
                )}
                onClick={() => {
                  onHideUserInformation();
                }}
              >
                <div className="absolute top-1/2 text-white text-opacity-70">
                  {visible ? (
                    <AiOutlineCaretRight size={15} />
                  ) : (
                    <AiOutlineCaretLeft size={15} />
                  )}
                </div>
              </div>
              <AnimatePresence>
                {visible && (
                  <motion.aside
                    initial={{ opacity: 0, x: 10, scale: 0.7 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      x: 10,
                      scale: 0.7,
                    }}
                  >
                    <AppContainerBox className="text-xs h-36 w-40">
                      <div className="mb-3 bg-white rounded-full p-2 bg-opacity-20">
                        <CiUser size="1.5rem" />
                      </div>
                      <div>{`${user.firstname} ${user.lastname} `}</div>
                      <div className="mt-2">
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
                    <div>
                      <AppContainerBox className="text-xs w-40 h-16 ">
                        <div className="text-xs">
                          <div className="flex flex-row">
                            <div className="text-gray-400 mr-1">
                              Cliente:{" "}
                              <span className="font-semibold text-white">{` ${convenio.descripcion}`}</span>
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <div className="text-gray-400 mr-1">
                              Sucursal:{" "}
                              <span className="font-semibold text-white">{` ${mandato.descripcion}`}</span>
                            </div>
                          </div>
                        </div>
                      </AppContainerBox>
                    </div>
                  </motion.aside>
                )}
              </AnimatePresence>
            </div>
          </div>
        </AppPageTransition>
      )}
    </>
  );
};
