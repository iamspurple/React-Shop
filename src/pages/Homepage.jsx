import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";
import OnSale from "../components/OnSale";
import Popular from "../components/Popular";
import Brands from "../components/Brands";
import Banner from "../components/Banner";
import Advantages from "../components/Advantages";

const Homepage = ({ data, isLoading }) => {
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
