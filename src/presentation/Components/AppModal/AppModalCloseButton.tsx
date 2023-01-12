import React, { useContext } from "react";
import { AppModalContext } from "./AppModal";
import { AppButton } from "../AppButton";
import { VscClose } from "react-icons/vsc";
export const AppModalCloseButton = () => {
  const { onClose } = useContext(AppModalContext);
  return (
    <AppButton
      onClick={onClose}
      variant="ghost"
      className="absolute right-3 top-3"
    >
      <VscClose size={20} />
    </AppButton>
  );
};
