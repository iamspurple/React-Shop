import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";
import OnSale from "../components/OnSale";
import Popular from "../components/Popular";
import Brands from "../components/Brands";
import Banner from "../components/Banner";
import Advantages from "../components/Advantages";

import { useGetProductsQuery } from "../store/slices/productsApi";

const Homepage = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading === true) {
    return <h1>Loading...</h1>
  }

  if (isLoading === false && !data) {
    return null
  }

  return (
    <>
      <main>
        <div className="container">
          <Hero />
          <CategoriesList />
          <OnSale data={data} />
          <Brands />
          <Banner />
          <Popular data={data} />
          <Advantages />
        </div>
      </main>
    </>
  );
};

export default Homepage;
