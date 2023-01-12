import React from "react";
import { AppFormField } from "../../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../../presentation/Components/AppTextField";
import AppSelect from "../../../../../presentation/Components/AppSelect";
import { Units } from "../../../../../utils/Units";
import { AppCheckBox } from "../../../../../presentation/Components/AppCheckBox";

export const ProductDetailForm = () => {
  return (
    <>
      <div className=" grid grid-cols-12 gap-x-3 gap-y-1">
        <div className="col-span-6">
          <AppFormField>
            <AppFormLabel>Clave: </AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className="col-span-5">
          <AppFormField>
            <AppFormLabel>Clave Alterna: </AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className="col-span-1">
          <AppFormField>
            <AppFormLabel>Servicio: </AppFormLabel>
            <div className="flex justify-center items-center border border-gray-100 border-opacity-40 rounded-md h-10 bg-black bg-opacity-25">
              <div className="ml-1">
                <AppCheckBox />
              </div>
            </div>
          </AppFormField>
        </div>
        <div className="col-span-12">
          <AppFormField>
            <AppFormLabel>Descripción: </AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Categoría: </AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Departamento: </AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Unidad de Compra: </AppFormLabel>
            <AppSelect name="SellUnit">
              <option value="">Selecciona una opción</option>
              {Units.map((unit) => (
                <option key={unit.key} value={unit.unit}>
                  {unit.unit}
                </option>
              ))}
            </AppSelect>
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Unidad de Venta: </AppFormLabel>
            <AppSelect>
              <option value={""}>Selecciona una opción</option>
              {Units.map((unit) => (
                <option key={unit.key} value={unit.unit}>
                  {unit.unit}
                </option>
              ))}
            </AppSelect>
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Impuestos: </AppFormLabel>
            <div className="flex justify-around  items-center border border-gray-100 border-opacity-40 rounded-md h-10 bg-black bg-opacity-25 text-sm">
              <div className="flex flex-row justify-center items-center">
                <div>
                  <AppCheckBox />
                </div>
                <span>I.V.A.</span>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div>
                  <AppCheckBox />
                </div>
                <span>IEPS</span>
              </div>
            </div>
          </AppFormField>
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-x-3 gap-y-1 mt-3">
        <div className="col-span-3">
          <AppFormField>
            <AppFormLabel>Precio de Compra:</AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className="col-span-3">
          <AppFormField>
            <AppFormLabel>Precio de Compra sin Impuestos:</AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className="col-span-3">
          <AppFormField>
            <AppFormLabel>Precio Compra Promedio:</AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        <div className=" col-span-3">
          <AppFormField>
            <AppFormLabel className="-top-5">
              Precio Compra Promedio sin Impuestos
            </AppFormLabel>
            <AppTextField />
          </AppFormField>
        </div>
        {/* ========================================= PRECIO 1 ============================*/}

        <div className="col-span-12 grid grid-cols-12 gap-x-3 mt-2 border border-gray-50 border-opacity-20 rounded-lg bg-black bg-opacity-40 p-2">
          <div className="col-span-3  flex flex-col gap-y-1 text-sm">
            <div className="text-center">PRECIO 1</div>
            <div>
              <AppFormField>
                <AppFormLabel>Utilidad %:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
            <div className="flex flex-row justify-around m-2">
              <div>Precio Venta: </div>
              <div>0</div>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta Neto:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Unidades por Mayoreo:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
          </div>
          {/* ========================================= PRECIO 2 ============================*/}
          <div className="col-span-3  flex flex-col gap-y-1 text-sm">
            <div className="text-center">PRECIO 2</div>
            <div>
              <AppFormField>
                <AppFormLabel>Utilidad %:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
            <div className="flex flex-row justify-around m-2">
              <div>Precio Venta: </div>
              <div>0</div>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta Neto:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Unidades por Mayoreo:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
          </div>
          {/* ========================================= PRECIO 3 ============================*/}

          <div className="col-span-3  flex flex-col gap-y-1 text-sm">
            <div className="text-center">PRECIO 3</div>
            <div>
              <AppFormField>
                <AppFormLabel>Utilidad %:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
            <div className="flex flex-row justify-around m-2">
              <div>Precio Venta: </div>
              <div>0</div>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta Neto:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Unidades por Mayoreo:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
          </div>
          {/* ========================================= PRECIO 4 ============================*/}

          <div className="col-span-3  flex flex-col gap-y-1 text-sm">
            <div className="text-center">PRECIO 4</div>
            <div>
              <AppFormField>
                <AppFormLabel>Utilidad %:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
            <div className="flex flex-row justify-around m-2">
              <div>Precio Venta: </div>
              <div>0</div>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta Neto:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Unidades por Mayoreo:</AppFormLabel>
                <AppTextField />
              </AppFormField>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
