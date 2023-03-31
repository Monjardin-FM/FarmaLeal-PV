import React, { useEffect, useState } from "react";
import { SellsNavbarActions } from "./sells-navbar-actions";
import { QuantityModal } from "./modals/QuantityModal";
import { AppTableProducts } from "../../../Products/web/components/Table/app-table-products";
import { SellsHeadPage } from "./sells-head-page";
import { SellsTotalViewer } from "./sells-total-viewer";
import { useSearchProducts } from "../../../Products/web/hooks/use-get-many-products";
import { ProductsResultSearchModal } from "./modals/ProductsResultSearchModal";
import { useSellsProducts } from "../hooks/useSellsProducts";

export const SellsManagerPage = () => {
  const { cart } = useSellsProducts();
  const [indexProduct, setIndexProduct] = useState(0);
  const [totalSell, setTotalSell] = useState<number>(699.99);
  const [toggleQuantityModal, setToggleQuantityModal] = useState(false);
  const [toggleResultSearchModal, setToggleResultSearchModal] = useState(false);
  const [cartItem, setCartItem] = useState(cart[indexProduct]);
  const [quantityProduct, setQuantityProduct] = useState(
    cart[indexProduct]?.quantity ?? 1
  );
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
    console.log(cart);
    console.log(indexProduct);
    setCartItem(cart[indexProduct]);
    console.log(cartItem);
  }, [indexProduct, cart, cartItem]);

  return (
    <>
      <QuantityModal
        isVisible={toggleQuantityModal}
        onClose={() => setToggleQuantityModal(false)}
        indexProduct={indexProduct}
        cartItem={cartItem}
        quantityProduct={quantityProduct}
      />
      <ProductsResultSearchModal
        isVisible={toggleResultSearchModal}
        onClose={() => setToggleResultSearchModal(false)}
        items={products}
        loadingProducts={loadingProducts}
        onSearch={onSearch}
        search={search}
        setSearch={setSearch}
      />
      <SellsNavbarActions openModal={handleOpenModal} />
      <section className="flex flex-row justify-center h-screen w-screen p-1">
        <div className="z-0 w-full grid grid-cols-12 grid-rows-6  gap-2 ">
          <SellsHeadPage
            onSearch={onSearch}
            search={search}
            setSearch={setSearch}
          />
          <AppTableProducts
            openModal={handleOpenModal}
            setIndexProduct={setIndexProduct}
            setQuantityProduct={setQuantityProduct}
          />
          <SellsTotalViewer totalSell={totalSell} />
        </div>
      </section>
    </>
  );
};
