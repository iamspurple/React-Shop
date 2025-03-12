import style from "./Cart.module.scss";
import { useUpdateUserInfoMutation } from "../../store/slices/productsApi";

const CartList = ({ user, list }) => {
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const handleIncreaseQuantity = (index, prod, quantity) => {
    if (user && list) {
      const updatedCartItem = { item: prod, quantity: quantity + 1 };
      const filteredCart = list.filter((item, i) => i !== index);
      const updatedCart = [updatedCartItem, ...filteredCart];

      updateUserInfo({ id: user.id, body: { cart: updatedCart } });
    }
  };

  return (
    <ul className={style.list}>
      {list?.map((product, index) => {
        const prod = product.item;
        const quantity = product.quantity;

        return (
          <li className={style.item} key={prod.id}>
            <img src={prod.image} alt={prod.title} />
            <div className={style.details}>
              <h3 className={style.title}>{prod.title}</h3>
              <ul className={style.advantages}>
                {prod.color && <li>Color: {prod.color}</li>}
                <li>In Stock</li>
                <li>Guaranteed</li>
                {!prod?.onSale && prod?.price > 1000 && <li>Free Delivery</li>}
                {prod?.onSale &&
                  prod?.price - (prod?.price / 100) * prod?.discount > 1000 && (
                    <li>Free Delivery</li>
                  )}
              </ul>
              <div className={style.price}>
                {prod.onSale ? (
                  <>
                    <span className={style.oldPrice}>${prod?.price}</span>
                    <span>
                      ${prod?.price - (prod?.price / 100) * prod?.discount}
                    </span>
                  </>
                ) : (
                  `$${prod?.price}`
                )}
              </div>
            </div>
            <div className={style.controls}>
              <button>delete</button>
              <div>
                <button> - </button>
                <span>{quantity}</span>
                <button
                  onClick={() => {
                    handleIncreaseQuantity(index, prod, quantity);
                  }}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartList;

{
  /* <li className={style.item} key={prod.id}>
<img src={prod.image} alt={prod.title} />
<div className={style.details}>
  <h3 className={style.title}>{prod.title}</h3>
  <ul className={style.advantages}>
    {prod.color && <li>Color: {prod.color}</li>}
    <li className={style.in_stock}>In Stock</li>
    <li className={style.guaranteed}>Guaranteed</li>
    {!prod?.onSale && prod?.price > 1000 && (
      <li className={style.delivery}>Free Delivery</li>
    )}
    {prod?.onSale &&
      prod?.price - (prod?.price / 100) * prod?.discount > 1000 && (
        <li className={style.delivery}>Free Delivery</li>
      )}
  </ul>
  <div className={style.price}>
    {prod.onSale ? (
      <>
        <span className={style.oldPrice}>${prod?.price}</span>
        <span>
          ${prod?.price - (prod?.price / 100) * prod?.discount}
        </span>
      </>
    ) : (
      `$${prod?.price}`
    )}
  </div>
</div>
<div className={style.controls}>
  <button className={style.delete}></button>
  <div className={style.quantity}>
    <button> - </button>
    <span>1</span>
    <button> + </button>
  </div>
</div>
</li> */
}
