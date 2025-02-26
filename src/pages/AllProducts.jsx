import CategoriesList from "../components/CategoriesList";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const AllProducts = ({ data }) => {
  return (
    <div className="container">
      <CategoriesList />
      <ul className="all-products">
        {data?.map((prod) => (
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

export default AllProducts;
