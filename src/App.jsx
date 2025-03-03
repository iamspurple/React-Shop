import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AllProducts from "./pages/AllProducts";
import ProductsByCategory from "./pages/ProductsByCategory";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AccountModal from "./pages/AccountModal/AccountModal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header setModal={setModal} />

      <Routes>
        <Route path="/" element={<Homepage/>} />

        <Route
          path="/products/:category/:id"
          element={<SingleProduct />}
        />

        <Route
          path="/products/:category"
          element={<ProductsByCategory />}
        />

        <Route
          path="/products"
          element={<AllProducts />}
        />

        <Route
          path="/products?sort=popular"
          element={<AllProducts />}
        />

        <Route
          path="/products?sort=onSale"
          element={<AllProducts />}
        />
        
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
