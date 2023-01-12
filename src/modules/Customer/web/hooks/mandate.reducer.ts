import { RootState } from "./../../../../utils/store";
import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { Mandate } from "./../../domain/entities/mandate";

export interface MandateState {
  value?: Mandate | null;
  loading: "pending" | "idle";
  error?: SerializedError | null;
}

const initialState = (): MandateState => {
  const mandateStored = localStorage.getItem("mandato");
  const mandato = mandateStored ? (JSON.parse(mandateStored) as Mandate) : null;
  return {
    value: mandato,
    loading: "idle",
    error: null,
  };
};

export const mandatoSlice = createSlice({
  name: "mandato",
  initialState: initialState(),
  reducers: {
    saveMandate: (state, { payload }: PayloadAction<{ mandato: Mandate }>) => {
      localStorage.setItem("mandato", JSON.stringify(payload.mandato));
    },
    logOutMandato: (state) => {
      localStorage.removeItem("mandato");
      state.value = null;
      state.loading = "idle";
      state.error = null;
    },
  },
});

export const { saveMandate, logOutMandato } = mandatoSlice.actions;

export const selectMandato = (state: RootState) => state.mandato.value;

export default mandatoSlice.reducer;
