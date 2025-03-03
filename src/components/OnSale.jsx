import SaleProduct from "./SaleProduct";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OnSale = ({ data }) => {
  const onSaleProducts = data?.filter((product) => product.onSale);

  const settings = {
    slidesToShow: 4.5,
    slidesToScroll: 2.5,
    infinite: true,
  };

  return (
    <section className="onsale">
      <div className="onsale-content">
        <h3 className="onsale-title">Products On Sale</h3>
        <span>Shop Now!</span>
        <Link
          to={"/products?sort=onSale"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className="onsale-link">View all</span>
        </Link>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </section>
  );
};

export default OnSale;
