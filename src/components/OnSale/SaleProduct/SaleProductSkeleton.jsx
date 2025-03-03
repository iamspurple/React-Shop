import Skeleton from "react-loading-skeleton";
import image from "../../../../public/icons/image-placeholder.svg";
import style from "./SaleProduct.module.scss";

const SaleProductSkeleton = () => {
  return (
    <div className={style.saleProduct}>
      <img src={image} alt="/" />
      <Skeleton
        count={2}
        containerClassName="skeleton-container"
        style={{ width: "80%" }}
      />
    </div>
  );
};

export default SaleProductSkeleton;
