import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["products", "users"],
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
      query: ({ page }) => `products?page=${page}&limit=18`,
    }),
    getProductsByCategory: build.query({
      query: (category) => `products?category=${category}`,
    }),
    getProductsByCategoryAndPage: build.query({
      query: ({ category, page }) =>
        `products?category=${category}&page=${page}&limit=18`,
    }),
    getProductsByTitleAndPage: build.query({
      query: ({ title, page }) =>
        `products?title=*${title}&page=${page}&limit=18`,
    }),
    getProductByCategoryAndId: build.query({
      query: ({ category, id }) => `products?category=${category}&id=${id}`,
    }),
    getProductById: build.query({
      query: (id) => `products?id=${id}`,
    }),
    getProductsByPropAndPage: build.query({
      query: ({ prop, page }) => `products?${prop}=true&page=${page}&limit=18`,
    }),
    //users
    createNewUser: build.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    getUserInfo: build.query({
      query: (uid) => `users?uid=${uid}`,
      providesTags: ["users"],
    }),
    updateUserInfo: build.mutation({
      query: ({ id, body }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  //products
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useLazyGetProductByIdQuery,
  useLazyGetProductsByPageQuery,
  useLazyGetProductsByTitleAndPageQuery,
  useLazyGetProductsByPropAndPageQuery,
  useGetProductByCategoryAndIdQuery,
  useGetProductsByCategoryAndPageQuery,
  //users
  useCreateNewUserMutation,
  useLazyGetUserInfoQuery,
  useUpdateUserInfoMutation,
} = productsApi;
