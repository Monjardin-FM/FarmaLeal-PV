import React from "react";
import { CFDISchema } from "../../domain/entities/CFDISchema";
import { CFDIInitialValues } from "../../domain/entities/CFDIInitialValues";
import { AppFormField } from "../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../presentation/Components/AppTextField";
import { AppErrorForm } from "../../../../presentation/Components/AppErrorForm";
import AppSelect from "../../../../presentation/Components/AppSelect";
// import { AppDatePicker } from "../../../../presentation/Components/AppDatePicker";
import { RegimenFiscal } from "../../domain/entities/RegimenFiscal";
import { UsosCFDI } from "../../domain/entities/UsosCFDI";
import AppDatePicker from "../../../../presentation/Components/AppDatePicker";
import { CiCalendar } from "react-icons/ci";
import { Form, Formik } from "formik";

export const AppFormCFDI = () => {
  return (
    <div className="container p-2 ">
      <Formik
        initialValues={CFDIInitialValues}
        onSubmit={() => {}}
        validationSchema={CFDISchema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          errors,
          setFieldValue,
          resetForm,
          handleBlur,
          touched,
        }) => {
          return (
            <Form>
              <div className="text-lg text-primary-600 mb-5">
                Ingresa tus datos de Facturación
              </div>
              <div className="grid grid-cols-12 lg:gap-5 md:gap-2 bg-black bg-opacity-30 p-5 rounded-lg ">
                <AppFormField className="col-span-3 flex flex-col">
                  <AppFormLabel>Nombre:</AppFormLabel>
                  <AppTextField
                    placeholder="Nombre"
                    name="Nombre"
                    value={values.Nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Nombre && errors.Nombre && (
                    <AppErrorForm
                      errorName={errors.Nombre}
                      errorFlag={touched.Nombre && errors.Nombre ? true : false}
                    />
                  )}
                </AppFormField>

                <AppFormField className="col-span-3">
                  <AppFormLabel>RFC:</AppFormLabel>
                  <AppTextField
                    placeholder="RFC"
                    name="RFC"
                    value={values.RFC}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.RFC && errors.RFC && (
                    <AppErrorForm
                      errorName={errors.RFC}
                      errorFlag={touched.RFC && errors.RFC ? true : false}
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-2">
                  <AppFormLabel>Tipo de Persona:</AppFormLabel>
                  <AppSelect
                    name="TipoPersona"
                    value={values.TipoPersona}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value={""}>Seleccionar</option>
                    <option value={"PF"}>Persona Física</option>
                    <option value={"PM"}>Persona Moral</option>
                  </AppSelect>
                  {touched.TipoPersona && errors.TipoPersona && (
                    <AppErrorForm
                      errorName={errors.TipoPersona}
                      errorFlag={
                        touched.TipoPersona && errors.TipoPersona ? true : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-2">
                  <AppFormLabel>Fecha de Ticket</AppFormLabel>
                  {/* <AppDatePicker
                    id="FechaTicket"
                    name="FechaTicket"
                    value={values.FechaTicket}
                    onChange={(fechaTicket) => {
                      if (fechaTicket instanceof Date) {
                        setFieldValue("FechaTicket", fechaTicket);
                      }
                    }}
                  /> */}
                  <AppDatePicker
                    id="FechaTicket"
                    name="FechaTicket"
                    selected={values.FechaTicket}
                    locale={"es"}
                    onChange={(FechaTicket: Date) => {
                      if (FechaTicket instanceof Date) {
                        setFieldValue("FechaTicket", FechaTicket);
                        // setFechaTicket(FechaTicket);
                        // setDateChange(!dateChange);
                      }
                    }}
                    leftIcon={<CiCalendar />}
                  ></AppDatePicker>
                </AppFormField>
                <AppFormField className="col-span-2">
                  <AppFormLabel>Número de Ticket</AppFormLabel>
                  <AppTextField
                    placeholder="Número de Ticket"
                    name="TicketNumber"
                    value={values.TicketNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.TicketNumber && errors.TicketNumber && (
                    <AppErrorForm
                      errorName={errors.TicketNumber}
                      errorFlag={
                        touched.TicketNumber && errors.TicketNumber
                          ? true
                          : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-2">
                  <AppFormLabel>Monto Total (Ticket)</AppFormLabel>
                  <AppTextField
                    placeholder="Monto Total"
                    name="TotalAmount"
                    value={values.TotalAmount}
                    onChange={handleChange}
                    type="number"
                    min={0}
                    step={0.5}
                    onBlur={handleBlur}
                  />
                  {touched.TotalAmount && errors.TotalAmount && (
                    <AppErrorForm
                      errorName={errors.TotalAmount}
                      errorFlag={
                        touched.TotalAmount && errors.TotalAmount ? true : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-2 max-sm:col-span-12">
                  <AppFormLabel>Lugar de Compra:</AppFormLabel>
                  <AppSelect
                    name="ShopPlace"
                    value={values.ShopPlace}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Seleccionar</option>
                    <option value="1">Coppel</option>
                    <option value="2">Farma Leal tienda en línea</option>
                  </AppSelect>
                  {touched.ShopPlace && errors.ShopPlace && (
                    <AppErrorForm
                      errorName={errors.ShopPlace}
                      errorFlag={
                        touched.ShopPlace && errors.ShopPlace ? true : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-3 max-sm:col-span-12">
                  <AppFormLabel>Régimen Fiscal:</AppFormLabel>
                  <AppSelect
                    name="RegFiscal"
                    value={values.RegFiscal}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Seleccionar</option>
                    {RegimenFiscal.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
                          {item.regimen}
                        </option>
                      );
                    })}
                  </AppSelect>
                  {touched.RegFiscal && errors.RegFiscal && (
                    <AppErrorForm
                      errorName={errors.RegFiscal}
                      errorFlag={
                        touched.RegFiscal && errors.RegFiscal ? true : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-3 max-sm:col-span-12">
                  <AppFormLabel>Uso de CFDI:</AppFormLabel>
                  <AppSelect
                    name="CFDIUse"
                    value={values.CFDIUse}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Seleccionar</option>
                    {UsosCFDI.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
                          {item.use}
                        </option>
                      );
                    })}
                  </AppSelect>
                  {touched.CFDIUse && errors.CFDIUse && (
                    <AppErrorForm
                      errorName={errors.CFDIUse}
                      errorFlag={
                        touched.CFDIUse && errors.CFDIUse ? true : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-2 max-sm:col-span-12">
                  <AppFormLabel>Forma de Pago:</AppFormLabel>
                  <AppSelect
                    name="FormaPago"
                    value={values.FormaPago}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Seleccionar</option>
                    <option value="1">Efectivo</option>
                    <option value="2">
                      Transferencia Electrónica de Fondos
                    </option>
                    <option value="3">Tarjeta de Crédito</option>
                    <option value="4">Monedero Electrónico</option>
                    <option value="5">Tarjeta de Débito</option>
                  </AppSelect>
                  {touched.FormaPago && errors.FormaPago && (
                    <AppErrorForm
                      errorName={errors.FormaPago}
                      errorFlag={
                        touched.FormaPago && errors.FormaPago ? true : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-2 max-sm:col-span-12">
                  <AppFormLabel>Método de Pago: </AppFormLabel>
                  <AppSelect
                    name="MetodoPago"
                    value={values.MetodoPago}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Seleccionar</option>
                    <option value="PUE">
                      PUE (Pago en una sola exhibición)
                    </option>
                  </AppSelect>
                  {touched.MetodoPago && errors.MetodoPago && (
                    <AppErrorForm
                      errorName={errors.MetodoPago}
                      errorFlag={
                        touched.MetodoPago && errors.MetodoPago ? true : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-3 max-sm:col-span-12">
                  <AppFormLabel>Calle:</AppFormLabel>
                  <AppTextField
                    placeholder="Calle"
                    name="Calle"
                    value={values.Calle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Calle && errors.Calle && (
                    <AppErrorForm
                      errorName={errors.Calle}
                      errorFlag={touched.Calle && errors.Calle ? true : false}
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-2 max-sm:col-span-6">
                  <AppFormLabel>Número Exterior:</AppFormLabel>
                  <AppTextField
                    placeholder="Núm. Ext."
                    name="NumExt"
                    value={values.NumExt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.NumExt && errors.NumExt && (
                    <AppErrorForm
                      errorName={errors.NumExt}
                      errorFlag={touched.NumExt && errors.NumExt ? true : false}
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-2 max-sm:col-span-6">
                  <AppFormLabel>Número Interior:</AppFormLabel>
                  <AppTextField
                    placeholder="Núm. Int."
                    name="NumInt"
                    value={values.NumInt}
                    onChange={handleChange}
                  />
                </AppFormField>
                <AppFormField className="col-span-3 max-sm:col-span-12">
                  <AppFormLabel>Colonia:</AppFormLabel>
                  <AppTextField
                    placeholder="Colonia"
                    name="Colonia"
                    value={values.Colonia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Colonia && errors.Colonia && (
                    <AppErrorForm
                      errorName={errors.Colonia}
                      errorFlag={
                        touched.Colonia && errors.Colonia ? true : false
                      }
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-3 max-sm:col-span-12">
                  <AppFormLabel>Delegación/Municipio:</AppFormLabel>
                  <AppTextField
                    placeholder="Del./Mun."
                    name="DelMun"
                    value={values.DelMun}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.DelMun && errors.DelMun && (
                    <AppErrorForm
                      errorName={errors.DelMun}
                      errorFlag={touched.DelMun && errors.DelMun ? true : false}
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-3 max-sm:col-span-12">
                  <AppFormLabel>Estado:</AppFormLabel>
                  <AppTextField
                    placeholder="Estado"
                    name="Estado"
                    value={values.Estado}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Estado && errors.Estado && (
                    <AppErrorForm
                      errorName={errors.Estado}
                      errorFlag={touched.Estado && errors.Estado ? true : false}
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-3 max-sm:col-span-12">
                  <AppFormLabel>Código Postal:</AppFormLabel>
                  <AppTextField
                    placeholder="C.P."
                    name="CP"
                    value={values.CP}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.CP && errors.CP && (
                    <AppErrorForm
                      errorName={errors.CP}
                      errorFlag={touched.CP && errors.CP ? true : false}
                    />
                  )}
                </AppFormField>
                <AppFormField className="col-span-3 max-sm:col-span-12">
                  <AppFormLabel>Correo Electrónico: </AppFormLabel>
                  <AppTextField
                    placeholder="Correo Electrónico"
                    name="Correo"
                    value={values.Correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Correo && errors.Correo && (
                    <AppErrorForm
                      errorName={errors.Correo}
                      errorFlag={touched.Correo && errors.Correo ? true : false}
                    />
                  )}
                </AppFormField>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
