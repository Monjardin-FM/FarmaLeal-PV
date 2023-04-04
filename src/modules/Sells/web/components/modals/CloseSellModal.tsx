import React, { useEffect, useState } from "react";
import {
  AppModal,
  AppModalBody,
  AppModalCloseButton,
  AppModalContent,
  AppModalHeader,
  AppModalOverlay,
} from "../../../../../presentation/Components/AppModal";
import { AppButton } from "../../../../../presentation/Components/AppButton";
import Efectivo from "../../../../../assets/img/efectivo.png";
import Card from "../../../../../assets/img/card.png";
import Vales from "../../../../../assets/img/vales.png";
import Cheque from "../../../../../assets/img/cheque.png";
import Transferencia from "../../../../../assets/img/money-transfer.png";
import MXN from "../../../../../assets/img/mxn.png";
import dayjs from "dayjs";

import AppTextField from "../../../../../presentation/Components/AppTextField";
import clsx from "clsx";
import { AppFormLabel } from "../../../../../presentation/Components/AppForm/AppFormLabel";
import { AppFormField } from "../../../../../presentation/Components/AppForm/AppFormField";
import AppSelect from "../../../../../presentation/Components/AppSelect";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
  const [efectivoValue, setEfectivoValue] = useState(0);
  const [cardValue, setCardValue] = useState(0);
  const [valesValue, setValesValue] = useState(0);
  const [chequeValue, setChequeValue] = useState(0);
  const [transferenciaValue, setTransferenciaValue] = useState(0);
  const [cambio, setCambio] = useState(0);
  const [parent] = useAutoAnimate({ duration: 300 });

  useEffect(() => {
    if (efectivoValue > 0)
      setCambio(
        efectivoValue +
          cardValue +
          valesValue +
          chequeValue +
          transferenciaValue -
          totalSell
      );
    else setCambio(0);
  }, [
    efectivoValue,
    cardValue,
    valesValue,
    chequeValue,
    transferenciaValue,
    totalSell,
  ]);
  const [dateSell, setDateSell] = useState<Date>(new Date());
  const [showCardSelect, setShowCardSelect] = useState(false);
  const handleCloseSell = () => {
    console.log(dateSell);
  };

  const refreshClock = () => {
    setDateSell(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

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
              <div className="relative flex flex-row justify-center items-center gap-x-5 mb-2">
                <span className="text-primary-100 text-lg">Total a Pagar:</span>
                <div className="border border-white p-3  bg-black bg-opacity-30 rounded-xl border-opacity-10 flex flex-row items-center gap-4">
                  <span className="text-4xl font-semibold text-success-600">
                    ${totalSell}
                  </span>
                  <div className="w-10">
                    <img src={MXN} alt="Pesos Mexicanos" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 flex flex-row justify-end text-sm font-semibold text-gray-500">
                  {dayjs(dateSell).format(" DD-MMM-YYYY HH:mm:ss")}
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-5 gap-8 justify-center items-center mt-5 mb-2">
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-12">
                    <img src={Efectivo} alt="Efectivo" />
                  </div>
                  <span className="text-sm font-semibold">Efectivo</span>
                  <AppTextField
                    type="number"
                    value={efectivoValue}
                    onChange={(e) => setEfectivoValue(parseInt(e.target.value))}
                    placeholder="0.00"
                    min={0}
                    onFocus={() => setShowCardSelect(false)}
                  />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-12">
                    <img src={Card} alt="Tarjeta" />
                  </div>
                  <span className="text-sm font-semibold">Tarjeta</span>
                  <AppTextField
                    type="number"
                    value={cardValue}
                    onChange={(e) => setCardValue(parseInt(e.target.value))}
                    placeholder="0.00"
                    min={0}
                    // onBlur={() => setShowCardSelect(false)}
                    onFocus={() => setShowCardSelect(true)}
                  />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-12">
                    <img src={Vales} alt="Vales" />
                  </div>
                  <span className="text-sm font-semibold">Vales</span>
                  <AppTextField
                    type="number"
                    value={valesValue}
                    onChange={(e) => setValesValue(parseInt(e.target.value))}
                    placeholder="0.00"
                    min={0}
                    onFocus={() => setShowCardSelect(false)}
                  />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-12">
                    <img src={Cheque} alt="Cheque" />
                  </div>
                  <span className="text-sm font-semibold">Cheque</span>
                  <AppTextField
                    type="number"
                    value={chequeValue}
                    onChange={(e) => setChequeValue(parseInt(e.target.value))}
                    placeholder="0.00"
                    min={0}
                    onFocus={() => setShowCardSelect(false)}
                  />
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center gap-y-1">
                  <div className="w-12">
                    <img src={Transferencia} alt="Transferencia" />
                  </div>
                  <span className="text-sm font-semibold">Transferencia</span>
                  <AppTextField
                    type="number"
                    value={transferenciaValue}
                    onChange={(e) =>
                      setTransferenciaValue(parseInt(e.target.value))
                    }
                    onFocus={() => setShowCardSelect(false)}
                  />
                </div>
              </div>
              <div ref={parent} className="w-1/3 mb-2">
                {showCardSelect && (
                  <AppFormField>
                    <AppFormLabel>Tipo de Tarjeta:</AppFormLabel>
                    <AppSelect>
                      <option>Selecciona tarjeta</option>
                      <option>Débito</option>
                      <option>Crédito</option>
                    </AppSelect>
                  </AppFormField>
                )}
              </div>
              <hr />
              <div className="mb-2 mt-2 flex flex-row items-center justify-center gap-5">
                <span className="text-lg">Cambio:</span>
                <div className="border border-white p-3 mb-3 bg-black bg-opacity-30 rounded-xl border-opacity-10 flex flex-row items-center gap-4">
                  <span
                    className={clsx(
                      "text-4xl font-semibold",
                      cambio >= 0 ? "text-success-600" : "text-danger-600"
                    )}
                  >
                    ${cambio}
                  </span>
                  <div className="w-10">
                    <img src={MXN} alt="Pesos Mexicanos" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justiify-center items-end">
                <div className="flex flex-row  gap-2">
                  <AppButton onClick={() => onClose()}>Cancelar</AppButton>
                  <AppButton
                    onClick={() => handleCloseSell()}
                    colorScheme="primary"
                  >
                    Aceptar
                  </AppButton>
                </div>
              </div>
            </AppModalBody>
          </AppModalContent>
        </AppModalOverlay>
      </AppModal>
    </>
  );
};
