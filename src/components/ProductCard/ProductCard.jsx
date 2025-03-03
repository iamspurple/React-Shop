import { trimTitle } from "../../config";

import style from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={style.popularProduct}>
      {product?.onSale && (
        <span className={style.discount}>{`-${product.discount}%`}</span>
      )}
      <img src={product?.image} alt={product?.title} />
      <span className={style.title}>{trimTitle(product?.title)}</span>
      <div className={style.info}>
        <div className={style.price}>
          {product.onSale ? (
            <>
              <span className={style.oldPrice}>${product?.price}</span>
              <span>
                ${product?.price - (product?.price / 100) * product?.discount}
              </span>
            </>
          ) : (
            `$${product?.price}`
          )}
        </div>
        <span className={style.rating}>{`4.${Math.random()
          .toString()
          .split(".")[1]
          .substring(0, 1)}`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
