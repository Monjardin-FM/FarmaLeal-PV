import React from "react";
import { Form, Formik } from "formik";
import { AppFormField } from "../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../presentation/Components/AppTextField";
import { RiLockPasswordLine } from "react-icons/ri";
import { AppButton } from "../../../presentation/Components/AppButton";
import * as Yup from "yup";
import { AppErrorForm } from "../../../presentation/Components/AppErrorForm";

export type ChangePasswordFormValues = {
  newPassword: string;
  confirmedPassword: string;
};
export const ChangePasswordForm = () => {
  const initialValues: ChangePasswordFormValues = {
    newPassword: "",
    confirmedPassword: "",
  };

  const ChangePasswordSchema = Yup.object().shape({
    newPassword: Yup.string().required("Campo Obligatorio"),
    confirmedPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Los campos no coinciden")
      .required("Campo Obligatorio"),
  });

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ChangePasswordSchema}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        touched,
        handleBlur,
        errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-5 justify-center items-center mt-10">
            <AppFormField>
              <AppFormLabel>Nueva Contraseña:</AppFormLabel>
              <AppTextField
                type="password"
                leftIcon=<RiLockPasswordLine />
                value={values.newPassword}
                name="newPassword"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.newPassword && errors.newPassword && (
                <AppErrorForm
                  errorName={errors.newPassword}
                  errorFlag={
                    touched.newPassword && errors.newPassword ? true : false
                  }
                />
              )}
            </AppFormField>
            <AppFormField>
              <AppFormLabel>Confirmar Contraseña:</AppFormLabel>
              <AppTextField
                type="password"
                leftIcon=<RiLockPasswordLine />
                value={values.confirmedPassword}
                name="confirmedPassword"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirmedPassword && errors.confirmedPassword && (
                <AppErrorForm
                  errorName={errors.confirmedPassword}
                  errorFlag={
                    touched.confirmedPassword && errors.confirmedPassword
                      ? true
                      : false
                  }
                />
              )}
            </AppFormField>
            <AppButton
              colorScheme="primary"
              variant="outline"
              type="submit"
              size="sm"
            >
              Enviar
            </AppButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};
