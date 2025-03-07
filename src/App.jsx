import "./style/style.scss";
// import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AllProducts from "./pages/AllProducts/AllProducts";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import AccountModal from "./pages/AccountModal/AccountModal";
import { useState } from "react";
import ProductsByCategory from "./pages/AllProducts/ProductsByCategory";
import { useLazyGetUserInfoQuery } from "./store/slices/productsApi";

function App() {
  const [modal, setModal] = useState(false);
  const [getUserInfo, { data, isLoading }] = useLazyGetUserInfoQuery();
  console.log(data, isLoading);
  return (
    <>
      <Header setModal={setModal} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:category" element={<ProductsByCategory />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/special/:prop" element={<AllProducts />} />
        <Route path="/products/special/:prop" element={<AllProducts />} />
        <Route path="/products/:category/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
      {modal ? (
        <AccountModal getUserInfo={getUserInfo} setModal={setModal} />
      ) : null}
    </>
  );
}

export default App;
