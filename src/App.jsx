import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ProductsOfCategory from "./pages/ProductsOfCategory";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { useState } from "react";
import AllProducts from "./pages/AllProducts";
import { useGetProductsQuery } from "./store/productsApi";
import ProductsOfSale from "./pages/ProductsOfSale";
import Cart from "./pages/Cart";

import LoginModal from "./components/AccountForm/LoginModal";
import SignUpModal from "./components/AccountForm/SignUpModal";

function App() {
  const [search, setSearch] = useState("");

  const { data } = useGetProductsQuery();

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route path="/categories/:category" element={<ProductsOfCategory />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<AllProducts data={data} />} />
        <Route path="/products/sale" element={<ProductsOfSale data={data} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignUpModal />} />
      </Routes>
    </>
  );
}

export default App;
