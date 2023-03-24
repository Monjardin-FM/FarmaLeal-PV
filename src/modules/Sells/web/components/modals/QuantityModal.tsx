import React, { useState } from "react";
import {
  AppModal,
  AppModalBody,
  AppModalContent,
  AppModalOverlay,
} from "../../../../../presentation/Components/AppModal";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { AppButton } from "../../../../../presentation/Components/AppButton";
import { AppContainerBox } from "../../../../../presentation/Components/AppContainerBox";
import Ok from "../../../../../assets/img/ok.png";
import { motion } from "framer-motion";
import { AppHeading } from "../../../../../presentation/Components/AppHeading";

type QuantityModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const QuantityModal = ({ isVisible, onClose }: QuantityModalProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <AppModal size="sm" isVisible={isVisible} onClose={() => onClose()}>
      <AppModalOverlay>
        <AppModalContent>
          <AppContainerBox className="p-2">
            <AppModalBody>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <AppHeading
                  className="flex justify-center items-center"
                  size="3xl"
                >
                  Cantidad
                </AppHeading>
                <div className="flex flex-row justify-center items-center gap-5">
                  <AppButton
                    variant="link"
                    size="base"
                    colorScheme="gray"
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    <BiChevronLeftCircle size={45} />
                  </AppButton>
                  <motion.div className="text-4xl font-bold">
                    {quantity}
                  </motion.div>
                  <AppButton
                    variant="link"
                    size="base"
                    colorScheme="gray"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <BiChevronRightCircle size={45} />
                  </AppButton>
                </div>
                <div className="w-14">
                  <button onClick={onClose}>
                    <img src={Ok} alt="ok" />
                  </button>
                </div>
              </div>
            </AppModalBody>
          </AppContainerBox>
        </AppModalContent>
      </AppModalOverlay>
    </AppModal>
  );
};
