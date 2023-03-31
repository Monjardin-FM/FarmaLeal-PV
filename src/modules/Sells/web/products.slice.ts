import { ProductCartItem } from "./../domain/entities/product-cart-item";
import { ProductCart } from "./../domain/entities/product-cart";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface cartProductsState {
  cart: ProductCart;
}

const initialState = {
  cart: [],
} as cartProductsState;

export const cartProductsSlice = createSlice({
  name: "cart-products",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<{ item: ProductCartItem }>) => {
      state.cart = [...state.cart, payload.item];
    },
    removeItem: (state, { payload }: PayloadAction<{ index: number }>) => {
      state.cart = [...state.cart].filter(
        (_, index) => index !== payload.index
      );
    },
    updateItem: (
      state,
      {
        payload,
      }: PayloadAction<{
        index: number;
        changes: Omit<ProductCartItem, "productId">;
      }>
    ) => {
      state.cart = [...state.cart].map((item, index) =>
        index === payload.index ? { ...item, ...payload.changes } : item
      );
    },
    updateQuantity: (
      state,
      { payload }: PayloadAction<{ index: number; quantity: number }>
    ) => {
      state.cart = [...state.cart].map((item, index) =>
        index === payload.index
          ? { ...item, quanitity: payload.quantity }
          : item
      );
    },
  },
});

export const { addItem, updateQuantity, removeItem, updateItem } =
  cartProductsSlice.actions;
export const { reducer: cartProductsReducer } = cartProductsSlice;
