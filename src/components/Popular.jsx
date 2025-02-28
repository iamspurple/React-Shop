import { Link } from "react-router-dom";
import PopularProduct from "./ProductCard";

const Popular = ({ data }) => {
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
        {popular?.map((prod) => (
          <Link
            to={`/products/${prod.id}`}
            key={prod.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <PopularProduct product={prod} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Popular;
