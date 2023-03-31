import { ProductCartItem } from "./../../domain/entities/product-cart-item";
import {
  useAppSelector,
  useAppDispatch,
} from "./../../../../utils/hooks/use-store";
import * as actions from "../products.slice";
export const useSellsProducts = () => {
  const state = useAppSelector((state) => state.productsCart);
  const dispatch = useAppDispatch();

  const addItem = (payload: { item: ProductCartItem }) =>
    dispatch(actions.addItem(payload));
  const removeItem = (payload: { index: number }) =>
    dispatch(actions.removeItem(payload));
  const updateItem = (payload: {
    index: number;
    changes: Omit<ProductCartItem, "productId">;
  }) => dispatch(actions.updateItem(payload));
  return {
    ...state,
    addItem,
    removeItem,
    updateItem,
  };
};
