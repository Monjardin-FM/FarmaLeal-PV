import React from "react";
import { RegisterCutHeadPage } from "./register-cut-head-page";

export const RegisterCutManagerPage = () => {
  return (
    <section className="flex flex-row justify-center h-screen w-screen">
      <div className="w-full grid grid-cols-12 grid-rows-6 gap-2">
        <RegisterCutHeadPage />
      </div>
    </section>
  );
};
