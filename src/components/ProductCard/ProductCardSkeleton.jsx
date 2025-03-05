import Skeleton from "react-loading-skeleton";
import image from "../../../public/icons/image-placeholder.svg";
import style from "./ProductCard.module.scss";
import skeleton from "../../style/skeleton.module.scss";

const ProductCardSkeleton = () => {
  return (
    <div className={style.popularProduct}>
      <img src={image} alt="/" />
      <Skeleton
        containerClassName={skeleton.skeleton}
        style={{ width: "80%" }}
        count={2}
      />
    </div>
  );
};

export default ProductCardSkeleton;
