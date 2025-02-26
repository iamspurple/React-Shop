import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://1179cf3e63182b49.mokky.dev",
  }),
  endpoints: (build) => ({
    //products
    getProducts: build.query({
      query: () => "products",
    }),
    getCategories: build.query({
      query: () => "categories",
    }),
    getProductsByCategory: build.query({
      query: (category) => `products?category=${category}`,
    }),
    getProductById: build.query({
      query: (id) => `products?id=${id}`,
    }),
    getProductByTitle: build.query({
      query: (title) => `products?title=*${title}`,
    }),
    //users
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useGetProductByTitleQuery,
} = productsApi;
