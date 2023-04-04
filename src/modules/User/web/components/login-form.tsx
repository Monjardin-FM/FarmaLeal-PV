import React, { useEffect } from "react";
import { AppFormField } from "../../../../presentation/Components/AppForm/AppFormField";
import { AppFormLabel } from "../../../../presentation/Components/AppForm/AppFormLabel";
import AppTextField from "../../../../presentation/Components/AppTextField";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Formik, Form } from "formik";
import { AppButton } from "../../../../presentation/Components/AppButton";
import { useUser } from "../hooks/use-user";
import { AppToast } from "../../../../presentation/Components/AppToastNotification";

export type LoginFormValue = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { signIn, loading, error } = useUser();

  const handleSubmit = async ({ email, password }: LoginFormValue) => {
    await signIn.execute({ email, password });
  };

  const initialValues: LoginFormValue = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (error) {
      AppToast().fire({
        position: "bottom",
        icon: "error",
        title: "Error al iniciar sesión",
        text: "Credenciales incorrectas",
      });
    }
  });
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <div>
              <AppFormField>
                <AppFormLabel>Correo electrónico:</AppFormLabel>
                <AppTextField
                  type="email"
                  leftIcon=<AiOutlineMail />
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
              </AppFormField>
            </div>
            <div>
              <AppFormField>
                <AppFormLabel>Contraseña:</AppFormLabel>
                <AppTextField
                  type="password"
                  leftIcon=<RiLockPasswordLine />
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                />
              </AppFormField>
            </div>
            <div>
              <AppButton
                colorScheme="primary"
                variant="outline"
                type="submit"
                size="sm"
                isLoading={loading === "pending"}
              >
                Ingresar
              </AppButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
