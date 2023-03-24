import React from "react";
import { ChangePasswordForm } from "./Forms/change-password-form";
import { AppContainerBox } from "../../presentation/Components/AppContainerBox";
import { AppHeading } from "../../presentation/Components/AppHeading";
import farmalealLogo from "../../assets/img/farmaleal-logo.png";

export const ChangePasswordManagerPage = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-2/5">
        <AppContainerBox>
          <div className="flex flex-col justify-center items-center p-14">
            <div className="w-20 mb-5">
              <img src={farmalealLogo} alt="" className="w-full h-auto" />
            </div>
            <AppHeading size="lg">Cambio de Contraseña</AppHeading>
            <ChangePasswordForm />
          </div>
        </AppContainerBox>
      </div>
    </div>
  );
};
