import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import image from "../../../public/icons/image-placeholder.svg";
import style from "./SingleProduct.module.scss";

const SkeletonCard = () => {
  return (
    <div className={style.single_product}>
      <div className={style.image}>
        <img src={image} alt="/" />
      </div>
      <div className={style.details} style={{ width: 300 }}>
        <h1 className={style.title}>
          <Skeleton />
        </h1>
        <p className={style.description}>
          <Skeleton count={7} />
        </p>
      </div>
      <div>
        <div className={style.purchase} style={{ width: 200 }}>
          <div className="single-product-price">
            <Skeleton containerClassName="skeleton-container" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
