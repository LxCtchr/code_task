import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currenciesSlice";

export const rootReducer = combineReducers({ currencyReducer });
