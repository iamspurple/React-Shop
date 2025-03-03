import { trimTitle } from "../../../config";
import style from "./SaleProduct.module.scss";

const SaleProduct = ({ product }) => {
  return (
    <div className={style.saleProduct}>
      <span className={style.discount}>{`-${product?.discount}%`}</span>
      <img src={product?.image} alt={product?.title} />
      <span>{trimTitle(product?.title)}</span>
      <div className={style.price}>
        <span className={style.oldPrice}>$ {product?.price} </span>
        <span className={style.newPrice}>
          $
          {(
            product?.price -
            (product?.price / 100) * product?.discount
          ).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default SaleProduct;
