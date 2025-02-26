import { trimTitle } from "../config";

const SaleProduct = ({ product }) => {
  return (
    <div className="sale-product" data-discount={`-${product.discount}%`}>
      <img src={product?.image} alt={product?.title} />
      <span>{trimTitle(product?.title)}</span>
      <div className="sale-product-price">
        <span className="old-price">$ {product?.price} </span>
        <span className="new-price">
          ${product?.price - (product?.price / 100) * product?.discount}
        </span>
      </div>
    </div>
  );
};

export default SaleProduct;
