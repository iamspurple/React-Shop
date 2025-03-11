import SaleProduct from "./SaleProduct/SaleProduct";
import SaleProductSkeleton from "./SaleProduct/SaleProductSkeleton";

import { Link } from "react-router-dom";
import Slider from "react-slick";

import style from "./OnSale.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OnSale = ({ data, isLoading }) => {
  const onSaleProducts = data?.filter((product) => product.onSale);

  const settings = {
    slidesToShow: 4.5,
    slidesToScroll: 2.5,
    infinite: true,
  };

  return (
    <section className={style.onsale}>
      <div className={style.content}>
        <h3 className={style.title}>Products On Sale</h3>
        <span>Shop Now!</span>
        <Link
          to={"/products/special/onSale"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className={style.link}>View all</span>
        </Link>
      </div>
      <div className={style.slider}>
        <Slider {...settings}>
          {isLoading &&
            Array(6)
              .fill(0)
              .map((item, index) => <SaleProductSkeleton key={index} />)}
          {data &&
            onSaleProducts?.map((prod) => (
              <Link
                to={`/products/${prod.category}/${prod.id}`}
                key={prod.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <SaleProduct product={prod} />
              </Link>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default OnSale;
