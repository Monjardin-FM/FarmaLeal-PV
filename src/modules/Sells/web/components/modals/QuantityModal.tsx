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
                <div className="flex justify-center items-center">
                  <div className="text-2xl">Cantidad</div>
                </div>
                <div className="flex flex-row justify-center items-center gap-5">
                  <div>
                    <AppButton
                      variant="ghost"
                      size="base"
                      colorScheme="primary"
                      onClick={() => setQuantity(quantity - 1)}
                    >
                      <BiChevronLeftCircle size={50} />
                    </AppButton>
                  </div>
                  <div className="text-4xl font-bold">{quantity}</div>
                  <div>
                    <AppButton
                      variant="ghost"
                      size="base"
                      colorScheme="primary"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <BiChevronRightCircle size={50} />
                    </AppButton>
                  </div>
                </div>
                <div className="w-16">
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
