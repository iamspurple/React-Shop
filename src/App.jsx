import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AllProducts from "./pages/AllProducts";
import { useGetProductsQuery } from "./store/slices/productsApi";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AccountModal from "./pages/AccountModal/AccountModal";
import { useState } from "react";

function App() {
  const { data } = useGetProductsQuery();

  const [modal, setModal] = useState(false);

  return (
    <>
      <Header setModal={setModal} />
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route
          path="/products?category=:category"
          element={<AllProducts data={data} />}
        />
        <Route path="/products" element={<AllProducts data={data} />} />
        <Route
          path="/products?sort=popular"
          element={<AllProducts data={data} />}
        />
        <Route
          path="/products?sort=onSale"
          element={<AllProducts data={data} />}
        />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<AccountModal />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
      {modal ? <AccountModal setModal={setModal} /> : null}
    </>
  );
}

export default App;
