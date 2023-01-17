import React, { useState } from "react";
import { AppContainerBox } from "../../presentation/Components/AppContainerBox";
import MXN from "../../assets/img/mxn.png";
import Register from "../../assets/img/icons8-register-64.png";
import Search from "../../assets/img/icons8-search-47.png";
import Quantity from "../../assets/img/icons8-boxes-64.png";

export const SellsManagerPage = () => {
  const [totalSell, setTotalSell] = useState<number>(699.99);
  console.log(setTotalSell);
  return (
    <>
      <AppContainerBox className="absolute top-24 left-1 h-4/5">
        <div className="flex flex-col justify-start gap-y-2">
          <div className="flex flex-col justify-center items-center gap-y-2 px-2 py-1 w-20 rounded-xl hover:bg-white hover:bg-opacity-25 hover:rounded-xl transition duration-200 hover:cursor-pointer">
            <img src={Search} alt="" width={30} />
            <span className="text-sm">Buscar</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 px-2 py-1 w-20 rounded-xl hover:bg-white hover:bg-opacity-25 hover:rounded-xl transition duration-200 hover:cursor-pointer">
            <img src={Register} alt="" width={30} />
            <span className="text-sm">Cajón</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 px-2 py-1 w-20 rounded-xl hover:bg-white hover:bg-opacity-25 hover:rounded-xl transition duration-200 hover:cursor-pointer">
            <img src={Quantity} alt="" width={30} />
            <span className="text-sm">Cantidad</span>
          </div>
        </div>
      </AppContainerBox>

      <AppContainerBox className="absolute bottom-1 right-1 p-5 w-96 items-center">
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
    </>
  );
};
