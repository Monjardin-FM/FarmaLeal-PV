import React, { useState } from "react";
import Register from "../../../../assets/img/icons8-register-64.png";
import Search from "../../../../assets/img/icons8-search-47.png";
import Quantity from "../../../../assets/img/icons8-boxes-64.png";
import { motion } from "framer-motion";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";

export type SellsNavbarActionsProps = {
  openModal: (modalName: string) => void;
};

export const SellsNavbarActions = ({ openModal }: SellsNavbarActionsProps) => {
  const [visible, setVisible] = useState(true);
  const variantsSells = {
    visible: { opacity: 1, transition: { type: "spring", duration: 0.75 } },
    hidden: {
      opacity: 1,
      x: "-91%",
      transition: { type: "spring", duration: 0.75 },
    },
  };
  const onHideUserInformation = () => {
    setVisible(!visible);
  };
  return (
    <motion.div
      initial="visible"
      animate={visible ? "visible" : "hidden"}
      variants={variantsSells}
      exit="hidden"
      className="z-10 absolute  top-1/3 left-1 flex flex-row justify-center items-center  backdrop-filter  bg-clip-padding backdrop-blur-sm"
    >
      <AppContainerBox className=" items-center p-2 ">
        <div className="flex flex-col justify-start gap-y-2">
          <button onClick={() => openModal("searchModal")}>
            <div className="flex flex-col justify-center items-center gap-y-2 px-2 py-1 w-16 rounded-xl hover:bg-white hover:bg-opacity-25 hover:rounded-xl transition duration-200 hover:cursor-pointer">
              <img src={Search} alt="" width={30} />
              <span className="text-sm">Buscar</span>
            </div>
          </button>
          <div className="flex flex-col justify-center items-center gap-y-2 px-2 py-1 w-16 rounded-xl hover:bg-white hover:bg-opacity-25 hover:rounded-xl transition duration-200 hover:cursor-pointer">
            <img src={Register} alt="" width={30} />
            <span className="text-sm">Cajón</span>
          </div>
          <button onClick={() => openModal("quantityModal")}>
            <div className="flex flex-col justify-center items-center gap-y-2 px-2 py-1 w-16 rounded-xl hover:bg-white hover:bg-opacity-25 hover:rounded-xl transition duration-200 hover:cursor-pointer">
              <img src={Quantity} alt="" width={30} />
              <span className="text-sm">Cantidad</span>
            </div>
          </button>
        </div>
      </AppContainerBox>

      <div
        className="z-10 h-28 w-3 rounded-md border-1 border-r border-b border-t border-white  border-opacity-40 hover:border-opacity-40 hover:bg-white hover:bg-opacity-20 hover:cursor-pointer transition duration-300 "
        onClick={() => {
          onHideUserInformation();
        }}
      >
        <div className="absolute top-1/2  text-white text-opacity-70">
          {visible ? (
            <AiOutlineCaretLeft size={15} />
          ) : (
            <AiOutlineCaretRight size={15} />
          )}
        </div>
      </div>
    </motion.div>
  );
};
