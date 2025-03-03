import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import image from "../../../public/icons/image-placeholder.svg";

const SkeletonCard = () => {
  return (
    <div className="single-product">
      <div className="single-product-image">
        <img src={image} alt="/" />
        <div className="single-product-icons">
          <button className="like">
            <Skeleton />
          </button>
          <button className="share">
            <Skeleton />
          </button>
        </div>
      </div>
      <div className="single-product-details" style={{ width: 300 }}>
        <h1 className="single-product-title">
          <Skeleton />
        </h1>
        <p className="single-product-descr">
          <Skeleton count={7} />
        </p>
      </div>
      <div>
        <div className="single-product-purchase" style={{ width: 200 }}>
          <div className="single-product-price">
            <Skeleton containerClassName="skeleton-container" />
          </div>
          <div className="single-product-buttons">
            <Skeleton count={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
