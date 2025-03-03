import { Link } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import ProductCardSkeleton from "./ProductCard/ProductCardSkeleton";

const Popular = ({ data, isLoading }) => {
  const popular = data?.filter((product) => product.popular).slice(0, 4);

  return (
    <section className="popular">
      <div className="popular-header">
        <h2 className="popular-title">Popular Products</h2>
        <Link to="/products?sort=popular" className="popular-link">
          View all
        </Link>
      </div>
      <ul className="popular-list">
        {isLoading &&
          Array(4)
            .fill(0)
            .map((item) => (
              <li key={item}>
                {" "}
                <ProductCardSkeleton />
              </li>
            ))}
        {data &&
          popular?.map((prod) => (
            <Link
              to={`/products/${prod.id}`}
              key={prod.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>
                <ProductCard product={prod} />
              </li>
            </Link>
          ))}
      </ul>
    </section>
  );
};

export default Popular;
