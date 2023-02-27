import React, { useState } from "react";
import { AppProductsHero } from "./app-products-hero";
import { AppTableProducts } from "./Table/app-table-products";
import { AppAddProductModal } from "./app-add-product-modal";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";

export const ProductsManagerPage = () => {
  const [toggleAddProductModal, setToggleAddProductModal] =
    useState<boolean>(false);
  return (
    <>
      <AppAddProductModal
        isVisible={toggleAddProductModal}
        onClose={() => {
          setToggleAddProductModal(false);
        }}
      />
      <div className="flex flex-col justify-center h-screen w-screen ">
        <AppProductsHero
          setToggleAddProductModal={() => setToggleAddProductModal(true)}
        />

        <div className=" flex justify-center overflow-y-auto overflow-x-auto mb-10 ">
          <div className="w-11/12">
            <AppContainerBox>
              <div className="">
                <AppTableProducts />
              </div>
            </AppContainerBox>
          </div>
        </div>
      </div>
    </>
  );
};
