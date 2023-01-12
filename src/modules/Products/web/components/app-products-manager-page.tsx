import React, { useState } from "react";
import { AppProductsHero } from "./app-products-hero";
import { AppTableProducts } from "./Table/app-table-products";
import { AppAddProductModal } from "./app-add-product-modal";

export const ProductsManagerPage = () => {
  const [toggleAddProductModal, setToggleAddProductModal] =
    useState<boolean>(false);
  return (
    <div>
      <AppAddProductModal
        isVisible={toggleAddProductModal}
        onClose={() => {
          setToggleAddProductModal(false);
        }}
      />

      <AppProductsHero
        setToggleAddProductModal={() => setToggleAddProductModal(true)}
      />

      <div className="flex justify-center">
        <div className=" bg-black bg-opacity-20 rounded-xl mb-20 container lg:w-11/12">
          <div className="bg-clip-padding backdrop-filter backdrop-blur-md">
            <AppTableProducts />
          </div>
        </div>
      </div>
    </div>
  );
};
