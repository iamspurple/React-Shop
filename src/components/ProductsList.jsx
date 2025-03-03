import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

import "../config";

export const ProductsList = ({ items }) => {
  return (
    <ul className="all-products">
      {items.map((prod) => (
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
