import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slices/productsApi";
import { userSlice } from "./slices/userSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    user: userSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
