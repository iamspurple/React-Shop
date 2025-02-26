import SaleProduct from "./SaleProduct";
import { Link } from "react-router-dom";

const OnSale = ({ data }) => {
  const onSaleProducts = data?.filter((product) => product.onSale);

  return (
    <section className="onsale">
      <div className="onsale-content">
        <h3 className="onsale-title">Products On Sale</h3>
        <span>Shop Now!</span>
        <Link
          to={"products/sale"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className="onsale-link">View all</span>
        </Link>
      </div>
      <ul className="onsale-list">
        {onSaleProducts?.map((prod) => (
          <Link
            to={`/products/${prod.id}`}
            key={prod.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <SaleProduct product={prod} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default OnSale;
