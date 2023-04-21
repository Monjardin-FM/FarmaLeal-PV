import * as Yup from "yup";
export const CFDISchema = Yup.object().shape({
  Nombre: Yup.string().required("Campo Obligatorio"),
  RFC: Yup.string()
    .max(13, "El RFC debe de tener un máximo de 13 caracteres")
    .required("Campo Obligatorio"),
  TipoPersona: Yup.string()
    .min(1, "Debes seleccionar una opción")
    .required("Debes seleccionar una opción"),
  RegFiscal: Yup.string().required("Debes seleccionar una opción"),
  CFDIUse: Yup.string()
    .min(1, "Debes seleccionar una opción")
    .required("Debes seleccionar una opción"),
  TicketNumber: Yup.string().required("Campo Obligatorio"),
  TotalAmount: Yup.number()
    .required("Campo Obligatorio")
    .positive("El monto debe ser mayor a 0"),
  ShopPlace: Yup.string().required("Campo Obligatorio"),
  FormaPago: Yup.string()
    .min(1, "Debes seleccionar una forma de pago")
    .required("Debes seleccionar una forma de pago"),
  MetodoPago: Yup.string()
    .min(1, "Debes seleccionar un método de pago")
    .required("Debes seleccionar un método de pago"),
  Calle: Yup.string().required("Campo Obligatorio"),
  NumExt: Yup.string().required("Campo Obligatorio"),
  Colonia: Yup.string().required("Campo Obligatorio"),
  DelMun: Yup.string().required("Campo Oblogatorio"),
  Estado: Yup.string().required("Campo Obligatorio"),
  CP: Yup.string()
    .required("Campo Obligatorio")
    .length(5, "Código Postal Inválido")
    .matches(/^\d+$/, "Código Postal Inválido"),
  Correo: Yup.string()
    .email("Introduce un correo válido")
    .required("Debes de introdcuir un correo para enviar la factura"),
});
