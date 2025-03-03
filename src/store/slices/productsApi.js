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
    getProductsByPage: build.query({
      query: (page) => `products?page=${page}&limit=18`
    }),
    getProductsByTitleAndPage: build.query({
      query: ({ title, page }) => `products?title=*${title}&page=${page}&limit=18`
    }),
    getProductsByCategory: build.query({
      query: (category) => `products?category=${category}`
    }),
    getProductsByCategoryAndPage: build.query({
      query: ({ category, page }) => `products?category=${category}&page=${page}&limit=18`
    }),
    getProductByCategoryAndId: build.query({
      query: ({ category, id }) => `products?category=${category}&id=${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByPageQuery,
  useGetProductsByTitleAndPageQuery,
  useGetProductsByCategoryAndPageQuery,
  useGetProductsByCategoryQuery,
  useGetProductByCategoryAndIdQuery,

  useLazyGetProductsByPageQuery,
  useLazyGetProductsByTitleAndPageQuery,
} = productsApi;
