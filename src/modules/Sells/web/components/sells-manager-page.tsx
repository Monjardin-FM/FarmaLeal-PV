import React, { useEffect, useState } from "react";
import { SellsNavbarActions } from "./sells-navbar-actions";
import { QuantityModal } from "./modals/QuantityModal";
import { AppTableProducts } from "../../../Products/web/components/Table/app-table-products";
import { SellsHeadPage } from "./sells-head-page";
import { SellsTotalViewer } from "./sells-total-viewer";
import { useSearchProducts } from "../../../Products/web/hooks/use-get-many-products";
import { ProductsResultSearchModal } from "./modals/ProductsResultSearchModal";
import { useSellsProducts } from "../hooks/useSellsProducts";
import { CloseSellModal } from "./modals/CloseSellModal";

export const SellsManagerPage = () => {
  const { cart } = useSellsProducts();
  const [indexProduct, setIndexProduct] = useState(0);
  const [totalSell, setTotalSell] = useState<number>(2500.99);
  const [toggleQuantityModal, setToggleQuantityModal] = useState(false);
  const [toggleResultSearchModal, setToggleResultSearchModal] = useState(false);
  const [toggleCloseSellModal, setToggleCloseSellModal] = useState(false);
  const [cartItem, setCartItem] = useState(cart[indexProduct]);
  const [quantityProduct, setQuantityProduct] = useState(
    cart[indexProduct]?.quantity ?? 1
  );
  const {
    getProducts,
    products,
    loading: loadingProducts,
  } = useSearchProducts();
  const handleOpenModal = (nameModal: string) => {
    nameModal === "search" && setToggleResultSearchModal(true);
    nameModal === "quantity" && setToggleQuantityModal(true);
    nameModal === "Sell" && setToggleCloseSellModal(true);
  };
  const [search, setSearch] = useState("");
  const onSearch = (search: string) => {
    getProducts({ keyword: search });
    setToggleResultSearchModal(true);
  };
  useEffect(() => {
    setCartItem(cart[indexProduct]);
  }, [indexProduct, cart, cartItem]);

  useEffect(() => {
    if (cart.length > 0) {
      const total = cart.map((item) => item.quantity * item.unitPrice);
      const totalAmount = total.reduce(
        (acumulator, current) => acumulator + current
      );
      setTotalSell(totalAmount);
    } else {
      setTotalSell(0);
    }
  }, [cart]);
  return (
    <div className="h-screen">
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
      <CloseSellModal
        isVisible={toggleCloseSellModal}
        onClose={() => setToggleCloseSellModal(false)}
        totalSell={totalSell}
      />
      <SellsNavbarActions openModal={handleOpenModal} />
      <section className="flex flex-row justify-center h-screen w-screen">
        <div className="w-full grid grid-cols-12 grid-rows-6  gap-2 ">
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
    </div>
  );
};
