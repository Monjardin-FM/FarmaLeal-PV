import React, { useState } from "react";
import { AppContainerBox } from "../../presentation/Components/AppContainerBox";
import { AppPageTransition } from "../../presentation/Components/AppPageTransition";
import MXN from "../../assets/img/mxn.png";
export const SellsManagerPage = () => {
  const [totalSell, setTotalSell] = useState<number>(699.99);
  console.log(setTotalSell);
  return (
    <AppPageTransition>
      <AppContainerBox className="absolute bottom-1 right-1 p-5 w-96">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-xs justify-self-end">MXN</div>
          <div className="w-6">
            <img src={MXN} alt="Pesos Mexicanos" />
          </div>
        </div>
        <div className="text-4xl font-bold text-white ">
          Total: $ {`${totalSell}`}
        </div>
      </AppContainerBox>
    </AppPageTransition>
  );
};
