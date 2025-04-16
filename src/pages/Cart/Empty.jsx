import style from "./Cart.module.scss";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <>
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
    </>
  );
};

export default Empty;
