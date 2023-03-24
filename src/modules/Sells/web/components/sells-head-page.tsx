import React from "react";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import { AppFormField } from "../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../presentation/Components/AppTextField";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { TfiSearch } from "react-icons/tfi";
import NoPhoto from "../../../../assets/img/Image_not_available.png";
import BarCode from "../../../../assets/img/bar-code.png";
import Client from "../../../../assets/img/client.png";

export type SellsHeadPageProps = {
  onSearch: (search: string) => void;
  search: string;
  setSearch: (search: string) => void;
};

export const SellsHeadPage = ({
  onSearch,
  search,
  setSearch,
}: SellsHeadPageProps) => {
  return (
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
                    <AppTextField
                      placeholder="Nombre del Producto o código"
                      type="text"
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      value={search}
                    />
                    <AppButton
                      variant="outline"
                      className="border-opacity-40"
                      colorScheme="primary"
                      size="sm"
                      type="submit"
                      onClick={() => onSearch(search)}
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
  );
};
