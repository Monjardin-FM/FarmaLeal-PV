import React, { useState } from "react";
import { RegisterCutHeadPage } from "./register-cut-head-page";
import { RegisterCutModal } from "./Modals/RegisterCutModal";
import { AppTableRegisterCut } from "./Tables/AppTableRegisterCut";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const RegisterCutManagerPage = () => {
  const [showRegisterCutModal, setShowRegisterCutModal] = useState(false);
  console.log(showRegisterCutModal);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const [parent] = useAutoAnimate({ duration: 200 });
  return (
    <>
      <RegisterCutModal
        isVisible={showRegisterCutModal}
        onClose={() => setShowRegisterCutModal(false)}
        setModal={setShowRegisterCutModal}
      />
      <section className="flex flex-row justify-center h-screen w-screen">
        <div
          ref={parent}
          className="w-full grid grid-cols-12 grid-rows-6 gap-2"
        >
          <RegisterCutHeadPage
            setShowRegisterCutModal={() => setShowRegisterCutModal(true)}
            setCalendarVisible={setCalendarVisible}
          />
          {!calendarVisible && <AppTableRegisterCut />}
        </div>
      </section>
    </>
  );
};
