import React from "react";
import "../../../../assets/css/background.css";
import farmalealLogo from "../../../../assets/img/farmaleal-logo.png";
import { useUser } from "../hooks/use-user";
import { Navigate } from "react-router-dom";
import { LoginForm } from "./login-form";
import { AppPageTransition } from "../../../../presentation/Components/AppPageTransition";

export const LoginApp = () => {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <Navigate to="/clientmandateselector" />
      ) : (
        <AppPageTransition>
          <div className="flex w-screen min-h-screen justify-center content-center items-center bg-animated">
            <div className="flex flex-col gap-y-5 justify-center items-center absolute z-10 content-center px-48 py-24 bg-black bg-opacity-10 border border-gray-50 border-opacity-10 rounded-md  backdrop-filter backdrop-blur-md text-sm text-gray-100 shadow-md shadow-black">
              <div className="w-20">
                <img src={farmalealLogo} alt="" className="w-full h-auto" />
              </div>
              <div className="font-semibold text-lg text-opacity-90 text-primary-500">
                FARMALEAL PV
              </div>
              <div className="text-base font-semibold">Iniciar Sesión</div>
              <div>
                <LoginForm />
              </div>
            </div>
          </div>
        </AppPageTransition>
      )}
    </>
  );
};
