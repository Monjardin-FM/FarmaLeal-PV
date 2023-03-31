import React from "react";
import { AppButton } from "../../../../../presentation/Components/AppButton";
import { FiTrash } from "react-icons/fi";
import { useSellsProducts } from "../../../../Sells/web/hooks/useSellsProducts";
export type AppRemoveItemButtonProps = {
  idItem: number;
};
export const AppRemoveItemButton = ({ idItem }: AppRemoveItemButtonProps) => {
  const { removeItem: removeItemSell } = useSellsProducts();
  const onRemoveItem = () => {
    removeItemSell({ index: idItem });
  };
  return (
    <div>
      <AppButton
        type="button"
        size="sm"
        variant="ghost"
        colorScheme="danger"
        onClick={() => onRemoveItem()}
      >
        <FiTrash size={20} />
      </AppButton>
    </div>
  );
};
