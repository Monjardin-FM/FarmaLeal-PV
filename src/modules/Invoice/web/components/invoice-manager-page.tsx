import React from "react";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import { AppFormCFDI } from "./app-form-cfdi";

export const InvoiceManagerPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-y-auto">
      <div className="w-10/12">
        <AppContainerBox className="flex flex-col items-center justify-center ">
          <AppFormCFDI />
        </AppContainerBox>
      </div>
    </div>
  );
};
