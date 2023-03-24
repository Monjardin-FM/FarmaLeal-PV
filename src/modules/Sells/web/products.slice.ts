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

export const { addItem, updateQuantity } = cartProductsSlice.actions;
export const { reducer: cartProductsReducer } = cartProductsSlice;
