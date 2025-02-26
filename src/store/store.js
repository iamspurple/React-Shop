import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
