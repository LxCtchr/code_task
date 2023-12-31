import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type rootState = ReturnType<typeof rootReducer>;
export type appStore = ReturnType<typeof setupStore>;
export type appDispatch = appStore["dispatch"];
