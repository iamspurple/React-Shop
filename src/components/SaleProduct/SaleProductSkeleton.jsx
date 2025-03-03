import Skeleton from "react-loading-skeleton";
import image from "../../../public/icons/image-placeholder.svg";

const SaleProductSkeleton = () => {
  return (
    <div className="sale-product">
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
