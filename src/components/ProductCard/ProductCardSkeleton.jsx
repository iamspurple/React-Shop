import Skeleton from "react-loading-skeleton";
import image from "../../../public/icons/image-placeholder.svg";

const ProductCardSkeleton = () => {
  return (
    <div className="popular-product">
      <img src={image} alt="/" />
      <Skeleton
        containerClassName="skeleton-container"
        style={{ width: "80%" }}
        count={2}
      />
    </div>
  );
};

export default ProductCardSkeleton;
