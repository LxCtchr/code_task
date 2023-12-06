import { createSlice } from "@reduxjs/toolkit/react";
import { PayloadAction } from "@reduxjs/toolkit";

type currencyState = {
  id: string;
  name: string;
  min_size: string;
};

const initialState: currencyState = {
  id: "RUB",
  name: "Russian Ruble",
  min_size: "0.01",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    change(state, action: PayloadAction<currencyState>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.min_size = action.payload.min_size;
    },
  },
});

export default currencySlice.reducer;
