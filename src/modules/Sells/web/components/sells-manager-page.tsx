import React, { useState } from "react";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import MXN from "../../../../assets/img/mxn.png";
import { SellsNavbarActions } from "./sells-navbar-actions";
import NoPhoto from "../../../../assets/img/Image_not_available.png";
import { AppFormField } from "../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../presentation/Components/AppTextField";
import BarCode from "../../../../assets/img/bar-code.png";
import Client from "../../../../assets/img/client.png";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { TfiSearch } from "react-icons/tfi";
import { QuantityModal } from "./modals/QuantityModal";
import { AppTableProducts } from "../../../Products/web/components/Table/app-table-products";

export const SellsManagerPage = () => {
  const [totalSell, setTotalSell] = useState<number>(699.99);
  const [toggleQuantityModal, setToggleQuantityModal] = useState(false);
  console.log(setTotalSell);

  const handleOpenModals = (modalName: string) => {
    console.log(modalName);
    if (modalName === "quantityModal") setToggleQuantityModal(true);
  };
  return (
    <>
      <QuantityModal
        isVisible={toggleQuantityModal}
        onClose={() => setToggleQuantityModal(false)}
      />
      <div className="flex flex-row justify-center h-screen w-screen p-1">
        <SellsNavbarActions openModal={handleOpenModals} />
        <div className="z-0 w-full grid grid-cols-12 grid-rows-6  gap-2 ">
          <div className="flex justify-center items-center col-start-2 col-span-10 row-span-1">
            <div className="w-full grid grid-cols-12 h-full gap-2 items-center ">
              <div className="col-span-3 w-3/4 flex items-center justify-self-end">
                <AppContainerBox className="p-2">
                  <div className="flex justify-center hover:bg-white hover:cursor-pointer hover:bg-opacity-25 transition duration-300 ">
                    <img src={NoPhoto} alt="No" className="w-3/4" />
                  </div>
                </AppContainerBox>
              </div>
              <div className="col-span-8 flex flex-col">
                <AppContainerBox className="p-2">
                  <div className="flex flex-col gap-2">
                    <div>
                      <AppFormField>
                        <div className="flex flex-row items-center justify-center gap-3">
                          <AppFormLabel>
                            <div className="w-7">
                              <img src={BarCode} alt="barras" />
                            </div>
                          </AppFormLabel>
                          <AppTextField />
                          <AppButton
                            variant="outline"
                            className="border-opacity-40"
                            colorScheme="primary"
                            size="sm"
                          >
                            <TfiSearch size={20} />
                          </AppButton>
                        </div>
                      </AppFormField>
                    </div>
                    <div>
                      <AppFormField>
                        <div className="flex flex-row items-center justify-center gap-3">
                          <AppFormLabel>
                            <div className="w-7">
                              <img src={Client} alt="clinet" />
                            </div>
                          </AppFormLabel>
                          <AppTextField />
                        </div>
                      </AppFormField>
                    </div>
                  </div>
                </AppContainerBox>
              </div>
            </div>
          </div>
          <div className=" mt-4 flex justify-center items-start col-start-2 col-span-10 row-span-4 overflow-y-scroll overflow-x-auto">
            <AppContainerBox className="">
              <div className="">
                <AppTableProducts />
              </div>
            </AppContainerBox>
          </div>

          <div className="flex  justify-end items-end col-start-10 col-span-3 row-start-6 row-span-1 sticky">
            <AppContainerBox className="text-gray-50 max-w-full h-full p-2">
              <div className="flex flex-row gap-2 items-center self-end">
                <div className="text-xs">MXN</div>
                <div className="w-6">
                  <img src={MXN} alt="Pesos Mexicanos" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white self-end">
                Total: $ {`${totalSell}`}
              </div>
            </AppContainerBox>
          </div>
        </div>
      </div>
    </>
  );
};
