import React, { useState } from "react";
import { RegisterCutHeadPage } from "./register-cut-head-page";

export const RegisterCutManagerPage = () => {
  const [showRegisterCutModal, setShowRegisterCutModal] = useState(false);
  console.log(showRegisterCutModal);
  return (
    <section className="flex flex-row justify-center h-screen w-screen">
      <div className="w-full grid grid-cols-12 grid-rows-6 gap-2">
        <RegisterCutHeadPage
          setShowRegisterCutModal={() => setShowRegisterCutModal(true)}
        />
        <div>{showRegisterCutModal}</div>
      </div>
    </section>
  );
};
