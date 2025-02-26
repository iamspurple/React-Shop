import { trimTitle } from "../config";

const ProductCard = ({ product }) => {
  return (
    <div className="popular-product">
      <img src={product?.image} alt={product?.title} />
      <span className="popular-product-title">{trimTitle(product?.title)}</span>
      <div className="popular-product-info">
        <span className="popular-product-price">${product?.price}</span>
        <span className="popular-product-rating">{`4.${Math.random()
          .toString()
          .split(".")[1]
          .substring(0, 1)}`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
