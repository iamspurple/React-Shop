import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCardSkeleton from "../../components/ProductCard/ProductCardSkeleton";

import style from "./AllProducts.module.scss";

const ProductsList = ({ items, isLoading }) => {
  return (
    <ul className={style.list}>
      {isLoading &&
        Array(9)
          .fill(1)
          .map((item, index) => (
            <li key={index}>
              <ProductCardSkeleton />
            </li>
          ))}
      {items &&
        items?.map((prod) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            key={prod.id}
            to={`/products/${prod.category}/${prod.id}`}
          >
            <li>
              <ProductCard product={prod} />
            </li>
          </Link>
        ))}
    </ul>
  );
};

export default ProductsList;
