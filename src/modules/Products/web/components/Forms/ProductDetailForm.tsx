import React, { useEffect } from "react";
import { AppFormField } from "../../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../../presentation/Components/AppTextField";
import AppSelect from "../../../../../presentation/Components/AppSelect";
import { Units } from "../../../../../utils/Units";
import { AppCheckBox } from "../../../../../presentation/Components/AppCheckBox";
import { AppErrorForm } from "../../../../../presentation/Components/AppErrorForm";
import { FormikErrors, FormikTouched } from "formik";
import { Product } from "../../../domain/entities/product";

export type ProductDetailFormProps = {
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

export const ProductDetailForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  setFieldValue,
}: ProductDetailFormProps) => {
  useEffect(() => {
    setFieldValue(
      "precio1.precioVenta",
      (values.precioCompra * (100 + (values.precio1.utilidad ?? 0))) / 100
    );

    values.precio2.utilidad !== 0
      ? setFieldValue(
          "precio2.precioVenta",
          (values.precioCompra * (100 + (values.precio2?.utilidad ?? 0))) / 100
        )
      : setFieldValue("precio2.precioVenta", 0);

    values.precio3.utilidad !== 0
      ? setFieldValue(
          "precio3.precioVenta",
          (values.precioCompra * (100 + (values.precio3?.utilidad ?? 0))) / 100
        )
      : setFieldValue("precio3.precioVenta", 0);
    values.precio4.utilidad !== 0
      ? setFieldValue(
          "precio4.precioVenta",
          (values.precioCompra * (100 + (values.precio4?.utilidad ?? 0))) / 100
        )
      : setFieldValue("precio4.precioVenta", 0);
  }, [
    values.precio1.utilidad,
    values.precio2.utilidad,
    values.precio3.utilidad,
    values.precio4.utilidad,
    values.precioCompra,
  ]);

  return (
    <>
      <div className=" grid grid-cols-12 gap-x-3 gap-y-1">
        <div className="col-span-6">
          <AppFormField>
            <AppFormLabel>Clave: </AppFormLabel>
            <AppTextField
              name="clave"
              type="text"
              value={values.clave}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.clave && errors.clave && (
              <AppErrorForm
                errorFlag={touched.clave && errors.clave ? true : false}
                errorName={errors.clave}
              >
                {errors.clave}
              </AppErrorForm>
            )}
          </AppFormField>
        </div>
        <div className="col-span-5">
          <AppFormField>
            <AppFormLabel>Clave Alterna: </AppFormLabel>
            <AppTextField
              name="claveAlterna"
              type="text"
              value={values.claveAlterna}
              onChange={handleChange}
            />
          </AppFormField>
        </div>
        <div className="col-span-1">
          <AppFormField>
            <AppFormLabel>Servicio: </AppFormLabel>
            <div className="flex justify-center items-center border border-gray-100 border-opacity-40 rounded-md h-10 bg-black bg-opacity-25">
              <div className="ml-1">
                <AppCheckBox
                  checked={values.servicio}
                  name="servicio"
                  type="checkbox"
                  value={String(values.servicio)}
                  onChange={handleChange}
                />
              </div>
            </div>
          </AppFormField>
        </div>
        <div className="col-span-12">
          <AppFormField>
            <AppFormLabel>Descripción: </AppFormLabel>
            <AppTextField
              name="descripcion"
              type="text"
              value={values.descripcion}
              onChange={handleChange}
            />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Categoría: </AppFormLabel>
            <AppTextField
              name="categoria"
              type="text"
              value={values.categoria}
              onChange={handleChange}
            />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Departamento: </AppFormLabel>
            <AppTextField
              name="departamento"
              type="text"
              value={values.departamento}
              onChange={handleChange}
            />
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Unidad de Compra: </AppFormLabel>
            <AppSelect
              name="unidadCompra"
              value={values.unidadCompra}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Selecciona una opción</option>
              {Units.map((unit) => (
                <option key={unit.key} value={unit.unit}>
                  {unit.unit}
                </option>
              ))}
            </AppSelect>
            {touched.unidadCompra && errors.unidadCompra && (
              <AppErrorForm
                errorFlag={
                  touched.unidadCompra && errors.unidadCompra ? true : false
                }
                errorName={errors.unidadCompra}
              >
                {errors.unidadCompra}
              </AppErrorForm>
            )}
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Unidad de Venta: </AppFormLabel>
            <AppSelect
              name="unidadVenta"
              value={values.unidadVenta}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value={""}>Selecciona una opción</option>
              {Units.map((unit) => (
                <option key={unit.key} value={unit.unit}>
                  {unit.unit}
                </option>
              ))}
            </AppSelect>
            {touched.unidadVenta && errors.unidadVenta && (
              <AppErrorForm
                errorFlag={
                  touched.unidadVenta && errors.unidadVenta ? true : false
                }
                errorName={errors.unidadVenta}
              >
                {errors.unidadVenta}
              </AppErrorForm>
            )}
          </AppFormField>
        </div>
        <div className="col-span-4">
          <AppFormField>
            <AppFormLabel>Impuestos: </AppFormLabel>
            <div className="flex justify-around  items-center border border-gray-100 border-opacity-40 rounded-md h-10 bg-black bg-opacity-25 text-sm">
              <div className="flex flex-row justify-center items-center">
                <div>
                  <AppCheckBox
                    name="impuestos.iva"
                    type="checkbox"
                    value={String(values.impuestos.iva)}
                    onChange={handleChange}
                    checked={values.impuestos.iva}
                  />
                </div>
                <span>I.V.A.</span>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div>
                  <AppCheckBox
                    name="impuestos.ieps"
                    type="checkbox"
                    value={String(values.impuestos.ieps)}
                    onChange={handleChange}
                    checked={values.impuestos.ieps}
                  />
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
            <AppTextField
              name="precioCompra"
              type="number"
              value={values.precioCompra}
              onChange={handleChange}
              className="text-end"
              min={0}
              onBlur={handleBlur}
            />
            {touched.precioCompra && errors.precioCompra && (
              <AppErrorForm
                errorFlag={
                  touched.precioCompra && errors.precioCompra ? true : false
                }
                errorName={errors.precioCompra}
              >
                {errors.precioCompra}
              </AppErrorForm>
            )}
          </AppFormField>
        </div>
        <div className="col-span-3">
          <AppFormField>
            <AppFormLabel>Precio de Compra sin Impuestos:</AppFormLabel>
            <AppTextField
              name="precioCompraWI"
              type="text"
              value={values.precioCompraWI}
              onChange={handleChange}
              className="text-end"
            />
          </AppFormField>
        </div>
        <div className="col-span-3">
          <AppFormField>
            <AppFormLabel>Precio Compra Promedio:</AppFormLabel>
            <AppTextField
              name="precioCompraProm"
              type="text"
              value={values.precioCompraProm}
              onChange={handleChange}
              className="text-end"
            />
          </AppFormField>
        </div>
        <div className=" col-span-3">
          <AppFormField>
            <AppFormLabel className="-top-5">
              Precio Compra Promedio sin Impuestos
            </AppFormLabel>
            <AppTextField
              name="precioCompraPromWI"
              type="text"
              value={values.precioCompraPromWI}
              onChange={handleChange}
              className="text-end"
            />
          </AppFormField>
        </div>
        {/* ========================================= PRECIO 1 ============================*/}

        <div className="col-span-12 grid grid-cols-12 gap-x-3 mt-2 border border-gray-50 border-opacity-20 rounded-lg bg-black bg-opacity-40 p-2">
          <div className="col-span-3  flex flex-col gap-y-1 text-sm">
            <div className="text-center">PRECIO 1</div>
            <div>
              <AppFormField>
                <AppFormLabel>Utilidad %:</AppFormLabel>
                <AppTextField
                  name="precio1.utilidad"
                  type="number"
                  value={values.precio1.utilidad}
                  onChange={handleChange}
                  className="text-end"
                  min={0}
                  step={1}
                />
              </AppFormField>
            </div>

            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta:</AppFormLabel>
                <AppTextField
                  name="precio1.precioVenta"
                  type="number"
                  value={values.precio1.precioVenta}
                  onChange={handleChange}
                  className="text-end"
                  disabled={true}
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta Neto:</AppFormLabel>
                <AppTextField
                  name="precio1.precioVentaNeto"
                  type="number"
                  value={values.precio1.precioVentaNeto}
                  onChange={handleChange}
                  className="text-end"
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Unidades por Mayoreo:</AppFormLabel>
                <AppTextField
                  name="precio1.unidadesMayoreo"
                  type="number"
                  value={values.precio1.unidadesMayoreo}
                  onChange={handleChange}
                  className="text-end"
                  disabled={true}
                />
              </AppFormField>
            </div>
          </div>
          {/* ========================================= PRECIO 2 ============================*/}
          <div className="col-span-3  flex flex-col gap-y-1 text-sm">
            <div className="text-center">PRECIO 2</div>
            <div>
              <AppFormField>
                <AppFormLabel>Utilidad %:</AppFormLabel>
                <AppTextField
                  name="precio2.utilidad"
                  type="number"
                  value={values.precio2?.utilidad}
                  onChange={handleChange}
                  className="text-end"
                  min={0}
                  step={1}
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta:</AppFormLabel>
                <AppTextField
                  name="precio2.precioVenta"
                  type="number"
                  value={values.precio2?.precioVenta}
                  onChange={handleChange}
                  className="text-end"
                  disabled={true}
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta Neto:</AppFormLabel>
                <AppTextField
                  name="precio2.precioVentaNeto"
                  type="number"
                  value={values.precio2?.precioVentaNeto}
                  onChange={handleChange}
                  className="text-end"
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Unidades por Mayoreo:</AppFormLabel>
                <AppTextField
                  name="precio2.unidadesMayoreo"
                  type="number"
                  value={values.precio2?.unidadesMayoreo}
                  onChange={handleChange}
                  className="text-end"
                />
              </AppFormField>
            </div>
          </div>
          {/* ========================================= PRECIO 3 ============================*/}

          <div className="col-span-3  flex flex-col gap-y-1 text-sm">
            <div className="text-center">PRECIO 3</div>
            <div>
              <AppFormField>
                <AppFormLabel>Utilidad %:</AppFormLabel>
                <AppTextField
                  name="precio3.utilidad"
                  type="number"
                  value={values.precio3?.utilidad}
                  onChange={handleChange}
                  className="text-end"
                  min={0}
                  step={1}
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta:</AppFormLabel>
                <AppTextField
                  name="precio3.precioVenta"
                  type="number"
                  value={values.precio3?.precioVenta}
                  onChange={handleChange}
                  className="text-end"
                  disabled={true}
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta Neto:</AppFormLabel>
                <AppTextField
                  name="precio3.precioVentaNeto"
                  type="number"
                  value={values.precio3?.precioVentaNeto}
                  onChange={handleChange}
                  className="text-end"
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Unidades por Mayoreo:</AppFormLabel>
                <AppTextField
                  name="precio3.unidadesMayoreo"
                  type="number"
                  value={values.precio3?.unidadesMayoreo}
                  onChange={handleChange}
                  className="text-end"
                />
              </AppFormField>
            </div>
          </div>
          {/* ========================================= PRECIO 4 ============================*/}

          <div className="col-span-3  flex flex-col gap-y-1 text-sm">
            <div className="text-center">PRECIO 4</div>
            <div>
              <AppFormField>
                <AppFormLabel>Utilidad %:</AppFormLabel>
                <AppTextField
                  name="precio4.utilidad"
                  type="number"
                  value={values.precio4?.utilidad}
                  onChange={handleChange}
                  className="text-end"
                  min={0}
                  step={1}
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta:</AppFormLabel>
                <AppTextField
                  name="precio4.precioVenta"
                  type="number"
                  value={values.precio4?.precioVenta}
                  onChange={handleChange}
                  className="text-end"
                  disabled={true}
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Precio Venta Neto:</AppFormLabel>
                <AppTextField
                  name="precio4.precioVentaNeto"
                  type="number"
                  value={values.precio4?.precioVentaNeto}
                  onChange={handleChange}
                  className="text-end"
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Unidades por Mayoreo:</AppFormLabel>
                <AppTextField
                  name="precio4.unidadesMayoreo"
                  type="number"
                  value={values.precio4?.unidadesMayoreo}
                  onChange={handleChange}
                  className="text-end"
                />
              </AppFormField>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
