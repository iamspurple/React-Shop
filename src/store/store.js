import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slices/productsApi";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
