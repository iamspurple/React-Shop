import CategoriesList from "../components/CategoriesList";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import ScrollToTop from "../config";

const ProductsOfSale = ({ data }) => {
  const saleProducts = data?.filter((prod) => prod.onSale);

  ScrollToTop();

  return (
    <div className="container">
      <CategoriesList />
      <ul className="all-products">
        {saleProducts?.map((prod) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            key={prod.id}
            to={`/products/${prod.id}`}
          >
            <li>
              <ProductCard product={prod} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductsOfSale;
