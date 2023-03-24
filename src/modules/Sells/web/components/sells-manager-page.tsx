import React, { useEffect, useState } from "react";
import { SellsNavbarActions } from "./sells-navbar-actions";
import { QuantityModal } from "./modals/QuantityModal";
import { AppTableProducts } from "../../../Products/web/components/Table/app-table-products";
import { SellsHeadPage } from "./sells-head-page";
import { SellsTotalViewer } from "./sells-total-viewer";
import { useSearchProducts } from "../../../Products/web/hooks/use-get-many-products";
import { ProductsResultSearchModal } from "./modals/ProductsResultSearchModal";

export const SellsManagerPage = () => {
  const [totalSell, setTotalSell] = useState<number>(699.99);
  const [toggleQuantityModal, setToggleQuantityModal] = useState(false);
  const [toggleResultSearchModal, setToggleResultSearchModal] = useState(false);
  console.log(setTotalSell);
  const {
    getProducts,
    products,
    loading: loadingProducts,
  } = useSearchProducts();
  const handleOpenModal = () => {
    setToggleQuantityModal(true);
  };
  const [search, setSearch] = useState("");
  const onSearch = (search: string) => {
    getProducts({ keyword: search });
    setToggleResultSearchModal(true);
  };
  useEffect(() => {
    fetch("https://api-dev.farmaleal.com.mx/api/Catalogs/Estado", {
      headers: {
        ApiKey: "RfdbA4nB46uNvI0f89TH7eT6",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
  return (
    <>
      <QuantityModal
        isVisible={toggleQuantityModal}
        onClose={() => setToggleQuantityModal(false)}
      />
      <ProductsResultSearchModal
        isVisible={toggleResultSearchModal}
        onClose={() => setToggleResultSearchModal(false)}
        items={products}
        loadingProducts={loadingProducts}
      />
      <SellsNavbarActions openModal={handleOpenModal} />
      <section className="flex flex-row justify-center h-screen w-screen p-1">
        <div className="z-0 w-full grid grid-cols-12 grid-rows-6  gap-2 ">
          <SellsHeadPage
            onSearch={onSearch}
            search={search}
            setSearch={setSearch}
          />
          <AppTableProducts openModal={handleOpenModal} />
          <SellsTotalViewer totalSell={totalSell} />
        </div>
      </section>
    </>
  );
};
