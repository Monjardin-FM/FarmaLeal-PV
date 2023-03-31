import React, { useState } from "react";
import {
  AppModal,
  AppModalBody,
  AppModalContent,
  AppModalOverlay,
} from "../../../../../presentation/Components/AppModal";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { AppButton } from "../../../../../presentation/Components/AppButton";
import { AppContainerBox } from "../../../../../presentation/Components/AppContainerBox";
import Ok from "../../../../../assets/img/ok.png";
import { AppHeading } from "../../../../../presentation/Components/AppHeading";
import { useKey } from "react-use";
import { useSellsProducts } from "../../hooks/useSellsProducts";
import { ProductCartItem } from "../../../domain/entities/product-cart-item";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineEnter,
} from "react-icons/ai";
type QuantityModalProps = {
  isVisible: boolean;
  onClose: () => void;
  indexProduct: number;
  cartItem: ProductCartItem;
  quantityProduct: number;
};

export const QuantityModal = ({
  isVisible,
  onClose,
  indexProduct,
  cartItem,
  quantityProduct,
}: QuantityModalProps) => {
  const { updateItem, cart } = useSellsProducts();
  const [quantity, setQuantity] = useState(
    quantityProduct ?? cart[indexProduct].quantity
  );
  const increment = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity((quantity) => quantity - 1);
  };
  const updateQuantity = () => {
    const product = cart[indexProduct];
    updateItem({
      index: indexProduct,
      changes: { ...product, quantity: quantity },
    });
    onClose();
  };
  useKey("ArrowUp", increment, {}, [quantity]);
  useKey("ArrowDown", decrement, {}, [quantity]);
  useKey("Enter", updateQuantity, { event: "keyup" }, [quantity]);
  return (
    <>
      <AppModal size="sm" isVisible={isVisible} onClose={() => onClose()}>
        <AppModalOverlay>
          <div className="absolute text-white top-1 right-1 h-fit">
            <AppContainerBox className="py-5 px-10">
              <div className="flex flex-col justify-center items-start gap-y-2">
                <div className="flex flex-row gap-x-2 items-center">
                  <div className="border border-white bg-gray-100 bg-opacity-25 p-1 rounded-lg">
                    <AiOutlineArrowUp size={20} />
                  </div>
                  <span>Incrementar</span>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                  <div className="border border-white bg-gray-100 bg-opacity-25 p-1 rounded-lg">
                    <AiOutlineArrowDown size={20} />
                  </div>
                  <span>Decrementar</span>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                  <div className="border border-white bg-gray-100 bg-opacity-25 p-1 rounded-lg">
                    <AiOutlineEnter size={20} />
                  </div>
                  <span>Aceptar</span>
                </div>
              </div>
            </AppContainerBox>
          </div>
          <AppModalContent>
            <AppContainerBox className="p-2">
              <AppModalBody>
                <div className="flex flex-col justify-center items-center gap-y-5">
                  <AppHeading
                    className="flex justify-center items-center"
                    size="3xl"
                  >
                    Cantidad
                  </AppHeading>
                  <div className="flex flex-row justify-center items-center gap-5">
                    <AppButton
                      variant="link"
                      size="base"
                      colorScheme="gray"
                      onClick={decrement}
                    >
                      <BiChevronLeftCircle size={45} />
                    </AppButton>
                    <div className="text-4xl font-bold">{quantity}</div>
                    <AppButton
                      variant="link"
                      size="base"
                      colorScheme="gray"
                      onClick={increment}
                    >
                      <BiChevronRightCircle size={45} />
                    </AppButton>
                  </div>
                  <div className="w-14">
                    <button onClick={updateQuantity}>
                      <img src={Ok} alt="ok" />
                    </button>
                  </div>
                </div>
              </AppModalBody>
            </AppContainerBox>
          </AppModalContent>
        </AppModalOverlay>
      </AppModal>
    </>
  );
};
