import { Customer } from "./../../domain/entities/customer";
import { RootState } from "../../../../utils/store";
import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export interface ConvenioState {
  value?: Customer | null;
  loading: "pending" | "idle";
  error?: SerializedError | null;
}

const initialState = (): ConvenioState => {
  const convenioStored = localStorage.getItem("convenio");
  const convenio = convenioStored
    ? (JSON.parse(convenioStored) as Customer)
    : null;
  return {
    value: convenio,
    loading: "idle",
    error: null,
  };
};

export const save = createAsyncThunk(
  "users/fetchByIdStatus",
  ({ convenio }: { convenio: Customer }) => {
    const data = localStorage.setItem("convenio", JSON.stringify(convenio));
    return data;
  }
);

export const convenioSlice = createSlice({
  name: "convenio",
  initialState: initialState(),
  reducers: {
    // saveCustomer: (
    //   state,
    //   { payload }: PayloadAction<{ convenio: Customer }>
    // ) => {
    //   localStorage.setItem("convenio", JSON.stringify(payload.convenio));
    // },
    logOutCustomer: (state) => {
      localStorage.removeItem("convenio");
      state.value = null;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(save.pending, (state) => {
      state.value = null;
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(save.fulfilled, (state, action: PayloadAction<any>) => {
      state.value = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(save.rejected, (state, action) => {
      state.value = null;
      state.loading = "idle";
      state.error = action.error;
    });
  },
});

export const { logOutCustomer } = convenioSlice.actions;

export const selectConvenio = (state: RootState) => state.convenio.value;

export default convenioSlice.reducer;
