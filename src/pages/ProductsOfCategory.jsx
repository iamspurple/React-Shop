import CategoriesList from "../components/CategoriesList";
import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../store/slices/productsApi";
import ScrollToTop from "../config";

const ProductsOfCategory = () => {
  const params = useParams();

  const { data } = useGetProductsByCategoryQuery(params.category);

  ScrollToTop();

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

export default ProductsOfCategory;
