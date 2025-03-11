import { Link } from "react-router-dom";
import style from "./Cart.module.scss";

const Cart = ({ isAuth, data }) => {
  const cart = data?.[0].cart;

  return (
    <div className="container">
      <div className={style.cart}>
        {!isAuth && (
          <p className={style.text}>
            Please log in to Tech Heim to see products in your cart
          </p>
        )}
        {isAuth && cart?.length == 0 && (
          <p className={style.text}>
            Your cart is empty. Add {""}
            <Link
              to="/products"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              products
            </Link>{" "}
            you liked
          </p>
        )}
        {isAuth && cart?.length > 0 && (
          <ul className={style.list}>
            {cart.map((prod) => (
              <li key={prod.id}>Product</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
