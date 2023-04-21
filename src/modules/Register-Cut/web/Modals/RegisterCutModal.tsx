import React, { useState } from "react";
import {
  AppModal,
  AppModalBody,
  AppModalCloseButton,
  AppModalContent,
  AppModalHeader,
  AppModalOverlay,
} from "../../../../presentation/Components/AppModal";
import { AppFormField } from "../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../presentation/Components/AppTextField";
import CountMoney from "../../../../assets/img/counting.png";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { ModalCountMoney } from "./ModalCountMoney";
export type RegisterCutModalProps = {
  isVisible: boolean;
  onClose: () => void;
  setModal: (flag: boolean) => void;
};

export const RegisterCutModal = ({
  isVisible,
  onClose,
  setModal,
}: RegisterCutModalProps) => {
  const [modalCountMoney, setModalCountMoney] = useState(false);
  return (
    <>
      <ModalCountMoney
        isVisible={modalCountMoney}
        onClose={() => {
          setModalCountMoney(false);

          setModal(true);
        }}
      />
      <AppModal isVisible={isVisible} onClose={onClose} size="3xl">
        <AppModalOverlay>
          <AppModalContent>
            <AppModalHeader>
              <span className="ml-10">Corte de Caja</span>
            </AppModalHeader>
            <AppModalCloseButton />
            <AppModalBody>
              <div className="w-full grid grid-cols-12 gap-3 items-center justify-center">
                <div className="col-span-3 col-start-4 text-center">
                  Contado:
                </div>
                <div className="col-span-3 text-center">Calculado:</div>
                <div className="col-span-3 text-center">Diferencia:</div>

                <AppFormLabel className="col-span-2">Efectivo:</AppFormLabel>
                <AppButton
                  variant="ghost"
                  size="sm"
                  colorScheme="info"
                  className="col-span-1"
                  onClick={() => {
                    setModalCountMoney(true);

                    onClose();
                  }}
                >
                  <img src={CountMoney} alt="" className="w-10" />
                </AppButton>
                <AppFormField className="col-span-3">
                  <div className="flex flex-row items-center justify-center gap-1">
                    <AppTextField type="number" />
                  </div>
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>

                <AppFormLabel className="col-span-3">Cheque:</AppFormLabel>
                <AppFormField className="col-span-3">
                  <div className="flex flex-row items-center justify-center gap-1">
                    <AppTextField type="number" />
                  </div>
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>

                <AppFormLabel className="col-span-3">Vales:</AppFormLabel>
                <AppFormField className="col-span-3">
                  <div className="flex flex-row items-center justify-center gap-1">
                    <AppTextField type="number" />
                  </div>
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>

                <AppFormLabel className="col-span-3">Tarjeta:</AppFormLabel>
                <AppFormField className="col-span-3">
                  <div className="flex flex-row items-center justify-center gap-1">
                    <AppTextField type="number" />
                  </div>
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>
                <div className="col-span-12">
                  <hr />
                </div>
                <AppFormLabel className="col-span-3">Total:</AppFormLabel>
                <AppFormField className="col-span-3">
                  <div className="flex flex-row items-center justify-center gap-1">
                    <AppTextField type="number" disabled={true} />
                  </div>
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>
                <AppFormField className="col-span-3">
                  <AppTextField type="number" disabled={true} />
                </AppFormField>
              </div>
              <div className="flex mt-5 gap-2 justify-end w-full">
                <AppButton color="gray">Cancelar</AppButton>
                <AppButton colorScheme="primary">Guardar</AppButton>
              </div>
            </AppModalBody>
          </AppModalContent>
        </AppModalOverlay>
      </AppModal>
    </>
  );
};
