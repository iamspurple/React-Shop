import Hero from "../components/Hero/Hero";
import CategoriesList from "../components/Categories/CategoriesList";
import OnSale from "../components/OnSale/OnSale";
import Popular from "../components/Popular/Popular";
import Brands from "../components/Brands/Brands";
import Banner from "../components/Banner/Banner";
import Advantages from "../components/Advantages/Advantages";
import { useGetProductsQuery } from "../store/slices/productsApi";
const Homepage = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <>
      <main>
        <div className="container">
          <Hero />
          <CategoriesList />
          <OnSale data={data} isLoading={isLoading} />
          <Brands />
          <Banner />
          <Popular data={data} isLoading={isLoading} />
          <Advantages />
        </div>
      </main>
    </>
  );
};

export default Homepage;
