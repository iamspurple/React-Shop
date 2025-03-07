import "./style/style.scss";
// import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AllProducts from "./pages/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import AccountModal from "./pages/AccountModal/AccountModal";
import { useEffect, useState } from "react";
import ProductsByCategory from "./pages/AllProducts/ProductsByCategory";
import { useLazyGetUserInfoQuery } from "./store/slices/productsApi";
import { getAuth } from "firebase/auth";

function App() {
  const [modal, setModal] = useState(false);
  const [getUserInfo, { data }] = useLazyGetUserInfoQuery();
  const auth = getAuth();
  const [isAuth, setIsAuth] = useState(auth.currentUser);

  useEffect(() => {
    if (auth.currentUser) {
      setIsAuth(auth.currentUser);
    }
  }, [auth.currentUser]);

  useEffect(() => {
    if (isAuth) {
      getUserInfo(isAuth.uid);
    }
  }, [isAuth, getUserInfo]);
  console.log(auth.currentUser, isAuth);

  return (
    <>
      <Header
        auth={auth}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        data={data}
        setModal={setModal}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:category" element={<ProductsByCategory />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/special/:prop" element={<AllProducts />} />
        <Route path="/products/special/:prop" element={<AllProducts />} />
        <Route path="/products/:category/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart isAuth={isAuth} data={data} />} />
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
