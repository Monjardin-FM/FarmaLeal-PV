import React from "react";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import MXN from "../../../../assets/img/mxn.png";

export type SellsTotalViewerProps = {
  totalSell: number;
};

export const SellsTotalViewer = ({ totalSell }: SellsTotalViewerProps) => {
  return (
    <div className="flex  justify-end items-end col-start-10 col-span-3 row-start-6 row-span-1 sticky">
      <AppContainerBox className="text-gray-50 max-w-full h-full p-2">
        <div className="flex flex-row gap-2 items-center self-end">
          <div className="text-xs">MXN</div>
          <div className="w-6">
            <img src={MXN} alt="Pesos Mexicanos" />
          </div>
        </div>
        <div className="text-3xl font-bold text-white self-end">
          Total: $ {`${totalSell}`}
        </div>
      </AppContainerBox>
    </div>
  );
};
