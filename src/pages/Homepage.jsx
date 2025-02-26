import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";
import OnSale from "../components/OnSale";
import Popular from "../components/Popular";
import Brands from "../components/Brands";
import Banner from "../components/Banner";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";

const Homepage = ({ data }) => {
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
      <Footer />
    </>
  );
};

export default Homepage;
