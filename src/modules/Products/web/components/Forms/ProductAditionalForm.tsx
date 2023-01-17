import React from "react";
import { AppFormField } from "../../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../../presentation/Components/AppTextField";
import { AppCheckBox } from "../../../../../presentation/Components/AppCheckBox";
import { Product } from "../../../domain/entities/product";
import { FormikErrors, FormikTouched } from "formik";

type ProductAditionalFormProps = {
  values: Product;
  handleChange: any;
  handleBlur: any;
  errors: FormikErrors<Product>;
  touched: FormikTouched<Product>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<Product>>;
};

export const ProductAditionalForm = ({
  values,
  errors,
  handleBlur,
  handleChange,
  touched,
  setFieldValue,
}: ProductAditionalFormProps) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-3 gap-y-5">
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Clave SAT:</AppFormLabel>
            <AppTextField
              name="claveSAT"
              value={values.claveSAT}
              onChange={handleChange}
            />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Inventario Mínimo</AppFormLabel>
            <AppTextField
              name="inventarioMinimo"
              value={values.inventarioMinimo}
              onChange={handleChange}
              type="number"
              min={0}
              step={1}
            />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Inventario Máximo</AppFormLabel>
            <AppTextField
              name="inventarioMaximo"
              value={values.inventarioMaximo}
              onChange={handleChange}
              type="number"
              min={0}
              step={1}
            />
          </AppFormField>
        </div>
        <div className="col-span-12 flex flex-col gap-3">
          <div>
            <AppFormField>
              <div className="flex flex-row justify-start items-center">
                <div className="flex justify-center items-center border border-gray-100 border-opacity-40 rounded-md w-14 h-10 bg-black bg-opacity-25 mr-1">
                  <div className="ml-1">
                    <AppCheckBox
                      type="checkbox"
                      checked={values.loteSerie}
                      name="loteSerie"
                      value={String(values.loteSerie)}
                      onChange={handleChange}
                    />
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
                    <AppCheckBox
                      type="checkbox"
                      checked={values.receta}
                      name="receta"
                      value={String(values.receta)}
                      onChange={handleChange}
                    />
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
                    <AppCheckBox
                      type="checkbox"
                      checked={values.granel}
                      name="granel"
                      value={String(values.granel)}
                      onChange={handleChange}
                    />
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
