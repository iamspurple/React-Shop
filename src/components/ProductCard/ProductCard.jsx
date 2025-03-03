import { trimTitle } from "../../config";

const ProductCard = ({ product }) => {
  return (
    <div
      className={
        product?.onSale ? "popular-product product-onSale" : "popular-product"
      }
      data-discount={`-${product.discount}%`}
    >
      <img src={product?.image} alt={product?.title} />
      <span className="popular-product-title">{trimTitle(product?.title)}</span>
      <div className="popular-product-info">
        <div className="popular-product-price">
          {product.onSale ? (
            <>
              <span className="popular-product-old-price">
                ${product?.price}
              </span>
              <span className="popular-product-new-price">
                ${product?.price - (product?.price / 100) * product?.discount}
              </span>
            </>
          ) : (
            `$${product?.price}`
          )}
        </div>
        <span className="popular-product-rating">{`4.${Math.random()
          .toString()
          .split(".")[1]
          .substring(0, 1)}`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
