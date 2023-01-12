import React from "react";
import { AppFormField } from "../../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../../presentation/Components/AppTextField";
import { AppCheckBox } from "../../../../../presentation/Components/AppCheckBox";

export const ProductAditionalForm = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-3 gap-y-5">
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Clave SAT:</AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Inventario Mínimo</AppFormLabel>
            <AppTextField type="number" min={0} step={1} />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Inventario Máximo</AppFormLabel>
            <AppTextField type="number" min={0} step={1} />
          </AppFormField>
        </div>
        <div className="col-span-12 flex flex-col gap-3">
          <div>
            <AppFormField>
              <div className="flex flex-row justify-start items-center">
                <div className="flex justify-center items-center border border-gray-100 border-opacity-40 rounded-md w-14 h-10 bg-black bg-opacity-25 mr-1">
                  <div className="ml-1">
                    <AppCheckBox />
                  </div>
                </div>
                <AppFormLabel>
                  Lote/Serie{" "}
                  <span className="text-gray-500">
                    (Indica si manejará un control de lotes / series para este
                    artículo)
                  </span>{" "}
                </AppFormLabel>
              </div>
            </AppFormField>
          </div>
          <div>
            <AppFormField>
              <div className="flex flex-row justify-start items-center">
                <div className="flex justify-center items-center border border-gray-100 border-opacity-40 rounded-md w-14 h-10 bg-black bg-opacity-25 mr-1">
                  <div className="ml-1">
                    <AppCheckBox />
                  </div>
                </div>
                <AppFormLabel>
                  Receta{" "}
                  <span className="text-gray-500">
                    (Indica si el artículo requiere de receta para su venta)
                  </span>{" "}
                </AppFormLabel>
              </div>
            </AppFormField>
          </div>
          <div>
            <AppFormField>
              <div className="flex flex-row justify-start items-center">
                <div className="flex justify-center items-center border border-gray-100 border-opacity-40 rounded-md w-14 h-10 bg-black bg-opacity-25 mr-1">
                  <div className="ml-1">
                    <AppCheckBox />
                  </div>
                </div>
                <AppFormLabel>
                  Granel{" "}
                  <span className="text-gray-500">
                    (Indica si el artículo se puede vender en cantidades
                    fraccionadas)
                  </span>{" "}
                </AppFormLabel>
              </div>
            </AppFormField>
          </div>
        </div>
      </div>
    </>
  );
};
