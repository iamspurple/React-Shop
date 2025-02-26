import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ProductsOfCategory from "./pages/ProductsOfCategory";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AllProducts from "./pages/AllProducts";
import { useGetProductsQuery } from "./store/slices/productsApi";
import ProductsOfSale from "./pages/ProductsOfSale";
import Cart from "./pages/Cart";

import LoginModal from "./components/AccountModal/LoginModal";
import SignUpModal from "./components/AccountModal/SignUpModal";

function App() {
  const { data } = useGetProductsQuery();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route path="/categories/:category" element={<ProductsOfCategory />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<AllProducts data={data} />} />
        <Route path="/products/sale" element={<ProductsOfSale data={data} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignUpModal />} />
        <Route
          path="/products/search/:title"
          element={<AllProducts data={data} />}
        />
      </Routes>
    </>
  );
}

export default App;
