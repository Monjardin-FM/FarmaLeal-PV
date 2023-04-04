import React, { useState } from "react";
import { CiLogout, CiUser } from "react-icons/ci";
import { AppButton } from "../AppButton";
import { AppContainerBox } from "../AppContainerBox";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useConvenio } from "../../../modules/Customer/web/hooks/useConvenio";
import { useMandato } from "../../../modules/Customer/web/hooks/useMandato";
import { useGetConvenioLocalStorage } from "../../../modules/Customer/web/hooks/useGetConvenioLocalStorage";
import { useGetMandatoLocalStorage } from "../../../modules/Customer/web/hooks/useGetMandatoLocalStorage";
import { User } from "../../../modules/User/domain/entities/user";

export type UserInformationProps = {
  user: User;
  signOut: any;
};

export const UserInformation = ({ signOut, user }: UserInformationProps) => {
  const { logOutCustomer } = useConvenio();
  const { logOutMandato } = useMandato();
  const { convenio } = useGetConvenioLocalStorage();
  const { mandato } = useGetMandatoLocalStorage();
  const [visible, setVisible] = useState(true);
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
    <motion.div
      initial="visible"
      animate={visible ? "visible" : "hidden"}
      variants={variantsUserInformation}
      exit="hidden"
      className="z-10 absolute w-fit top-1 right-1 flex flex-row justify-center items-center  backdrop-filter  bg-clip-padding backdrop-blur-sm "
    >
      <div
        className={
          "  h-28 w-3 rounded-md border-l border-b border-t border-white  border-opacity-40 hover:border-opacity-40 hover:bg-white hover:bg-opacity-20 hover:cursor-pointer transition duration-300 "
        }
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
            <div className="text-gray-400 w-40">
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
  );
};
