import style from "./Cart.module.scss";

const Cart = ({ isAuth, data }) => {
  // const cart = data?.[0].cart;

  // console.log(cart);
  return (
    <div className="container">
      <div className={style.cart}>
        {!isAuth && (
          <p>Please log in to Tech Heim to see products in your cart</p>
        )}
        {isAuth && data && (
          <ul className={style.list}>
            <li className={style.item}>Product</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
