import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../modules/User/web/user.reducer";
import convenioReducer from "../modules/Customer/web/hooks/convenio.reducer";
import mandateReducer from "../modules/Customer/web/hooks/mandate.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    convenio: convenioReducer,
    mandato: mandateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
