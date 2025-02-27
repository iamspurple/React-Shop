import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AllProducts from "./pages/AllProducts";
import { useGetProductsQuery } from "./store/slices/productsApi";
import ProductsOfSale from "./pages/ProductsOfSale";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AccountModal from "./pages/AccountModal/AccountModal";

function App() {
  const { data } = useGetProductsQuery();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route
          path="/products/category/:category"
          element={<AllProducts data={data} />}
        />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<AllProducts data={data} />} />
        <Route path="/products/sale" element={<ProductsOfSale data={data} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<AccountModal />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
