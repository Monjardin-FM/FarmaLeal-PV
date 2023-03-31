import React, { useState } from "react";
import { AppProductsHero } from "./app-products-hero";
import { AppAddProductModal } from "./app-add-product-modal";
import { AppContainerBox } from "../../../../presentation/Components/AppContainerBox";
import { useSearchProducts } from "../hooks/use-get-many-products";
import { AppTableProducts } from "./Table/app-table-products";
import { ResultSearchTableModal } from "../../../Sells/web/components/tables/result-search-table-modal";
import { TableSkeleton } from "../../../../presentation/Components/TableSkeleton";
import { DataNotFound } from "../../../../presentation/Components/AppDataNotFound";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const ProductsManagerPage = () => {
  const [toggleAddProductModal, setToggleAddProductModal] =
    useState<boolean>(false);
  const [search, setSearch] = useState("");

  const {
    getProducts,
    products,
    loading: loadingProducts,
  } = useSearchProducts();
  const onSearch = (search: string) => {
    getProducts({ keyword: search });
  };
  const [parent] = useAutoAnimate({ duration: 300 });

  return (
    <>
      <AppAddProductModal
        isVisible={toggleAddProductModal}
        onClose={() => {
          setToggleAddProductModal(false);
        }}
      />
      <div className="grid grid-cols-12 grid-rows-6 h-screen">
        <div className="col-span-12 row-span-2">
          <AppProductsHero
            setToggleAddProductModal={() => setToggleAddProductModal(true)}
            onSearch={onSearch}
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div
          ref={parent}
          className="col-span-8 col-start-3 row-span-4 flex justify-center overflow-y-auto overflow-x-auto  mb-5"
        >
          {loadingProducts ? (
            <AppContainerBox>
              <TableSkeleton />
            </AppContainerBox>
          ) : (
            <div ref={parent}>
              {products?.length === undefined || products?.length === 0 ? (
                <AppContainerBox>
                  <div className="flex flex-row justify-center items-center">
                    <div className="max-w-xl">
                      <DataNotFound />
                    </div>
                  </div>
                </AppContainerBox>
              ) : (
                <AppContainerBox>
                  <ResultSearchTableModal items={products} />
                </AppContainerBox>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
