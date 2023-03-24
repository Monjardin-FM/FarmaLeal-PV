import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../modules/User/web/user.reducer";
import convenioReducer from "../modules/Customer/web/hooks/convenio.reducer";
import mandateReducer from "../modules/Customer/web/hooks/mandate.reducer";
import { cartProductsReducer } from "../modules/Sells/web/products.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    convenio: convenioReducer,
    mandato: mandateReducer,
    productsCart: cartProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
