import style from "./Cart.module.scss";
import CartList from "./CartList";
import { useUpdateUserInfoMutation } from "../../store/slices/productsApi";
import Empty from "./Empty";

const Cart = ({ isAuth, user }) => {
  const cart = user?.cart;

  const [updateUserInfo] = useUpdateUserInfoMutation();

  const handleEmpty = () => {
    if (isAuth && user) {
      updateUserInfo({ id: user?.id, body: { cart: [] } });
    }
  };

  // const handleDecrease = (itemId) => {

  //   if (isAuth && data) {
  //     updateUserInfo({id: data[0].id}, body: {})
  //   }
  // }

  return (
    <div className="container">
      <div className={style.cart}>
        {!isAuth && (
          <p className={style.text}>
            Please log in to Tech Heim to see products in your cart
          </p>
        )}
        {isAuth && !cart?.length && <Empty />}
        {isAuth && cart?.length > 0 && (
          <>
            <CartList user={user} list={cart} />
            <button onClick={() => handleEmpty()}>
              Empty the shopping cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
