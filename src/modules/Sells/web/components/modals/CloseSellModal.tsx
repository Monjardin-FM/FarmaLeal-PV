import React from "react";
import {
  AppModal,
  AppModalBody,
  AppModalCloseButton,
  AppModalContent,
  AppModalHeader,
  AppModalOverlay,
} from "../../../../../presentation/Components/AppModal";
import { useSellsProducts } from "../../hooks/useSellsProducts";
import { AppButton } from "../../../../../presentation/Components/AppButton";
import Efectivo from "../../../../../assets/img/efectivo.png";
import Card from "../../../../../assets/img/card.png";
import Vales from "../../../../../assets/img/vales.png";
import Cheque from "../../../../../assets/img/cheque.png";
import Transferencia from "../../../../../assets/img/money-transfer.png";
import MXN from "../../../../../assets/img/mxn.png";

import AppTextField from "../../../../../presentation/Components/AppTextField";

type CloseSellModalProps = {
  isVisible: boolean;
  onClose: () => void;
  totalSell: number;
};
export const CloseSellModal = ({
  isVisible,
  onClose,
  totalSell,
}: CloseSellModalProps) => {
  const { cart } = useSellsProducts();
  return (
    <>
      <AppModal size="3xl" isVisible={isVisible} onClose={() => onClose()}>
        <AppModalOverlay>
          <AppModalContent>
            <AppModalHeader>
              <div className="ml-10">Cerrar Venta</div>
            </AppModalHeader>
            <AppModalCloseButton />
            <AppModalBody>
              <div className="flex flex-col justify-center items-center">
                <span className="text-primary-100 text-lg">Total a Pagar</span>
                <div className="border border-white p-4 mb-3 bg-black bg-opacity-30 rounded-xl border-opacity-10 flex flex-row items-center gap-4">
                  <span className="text-4xl font-semibold text-success-600">
                    ${totalSell}
                  </span>
                  <div className="w-12">
                    <img src={MXN} alt="Pesos Mexicanos" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-5 gap-8 justify-center items-center mt-5 mb-5">
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-14">
                    <img src={Efectivo} alt="Efectivo" />
                  </div>
                  <span className="text-sm font-semibold">Efectivo</span>
                  <AppTextField />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-14">
                    <img src={Card} alt="Tarjeta" />
                  </div>
                  <span className="text-sm font-semibold">Tarjeta</span>
                  <AppTextField />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-14">
                    <img src={Vales} alt="Vales" />
                  </div>
                  <span className="text-sm font-semibold">Vales</span>
                  <AppTextField />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-14">
                    <img src={Cheque} alt="Cheque" />
                  </div>
                  <span className="text-sm font-semibold">Cheque</span>
                  <AppTextField />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-14">
                    <img src={Transferencia} alt="Transferencia" />
                  </div>
                  <span className="text-sm font-semibold">Transferencia</span>
                  <AppTextField />
                </div>
              </div>{" "}
              <hr />
              <div className="mb-5"></div>
              {/* <div>
                {cart.map((item) => (
                  <div className="flex flex=col justify-start items-center gap-x-4 gap-y-5">
                    <div>{item.ean}</div>
                    <div>{item.name}</div>
                  </div>
                ))}
              </div> */}
              <div className="flex flex-col justiify-center items-end">
                <div className="flex flex-row  gap-2">
                  <AppButton>Cancelar</AppButton>
                  <AppButton colorScheme="primary">Aceptar</AppButton>
                </div>
              </div>
            </AppModalBody>
          </AppModalContent>
        </AppModalOverlay>
      </AppModal>
    </>
  );
};
