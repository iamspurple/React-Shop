import style from "./SingleProduct.module.scss";
import { useUpdateUserInfoMutation } from "../../store/slices/productsApi";
import Like from "/icons/heart.svg";
import Liked from "/icons/blue-heart.svg";
import Share from "/icons/directbox-send.svg";

const SingleProductCard = ({ user, isAuth, data }) => {
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const handleLike = () => {
    if (isAuth && user && data) {
      const updatedFavorites = [...user.favorites, { id: data?.id }];
      const id = user?.id;
      updateUserInfo({ id, body: { favorites: updatedFavorites } });
    } else {
      alert("You need to log in first");
    }
  };

  const handleShare = () => {
    const location = window.location.href;
    navigator.clipboard
      .writeText(location)
      .then(() => {
        alert("Link have been copied successfully!");
      })
      .catch(() => {
        alert("Something went wrong, please try again!");
      });
  };

  const isInFavorites = user?.favorites?.find(
    (product) => product.id === data.id
  );
  const isInCart = user?.cart?.find((product) => product.item.id === data.id);

  const handleAddToCart = () => {
    if (isAuth && user && data) {
      const updatedCart = [...user.cart, { item: data, quantity: 1 }];
      const id = user?.id;
      updateUserInfo({ id, body: { cart: updatedCart } });
    } else {
      alert("You need to log in first");
    }
  };

  return (
    <div className={style.single_product}>
      <div className={style.image}>
        <img src={data?.image} alt={data?.title} />
        <div className={style.icons}>
          {user && isInFavorites ? (
            <button disabled style={{ color: "#063a88" }}>
              <img src={Liked} alt="liked" />
              In Favorites
            </button>
          ) : (
            <button onClick={() => handleLike()} className="like">
              <img src={Like} alt="like" />
              Add to Favorites
            </button>
          )}
          <button onClick={() => handleShare()} className="share">
            <img src={Share} alt="share" />
            Share
          </button>
        </div>
      </div>
      <div className={style.details}>
        <h1 className={style.title}>{data?.title}</h1>
        <span className={style.rating}>{`4.${Math.random()
          .toString()
          .split(".")[1]
          .substring(0, 1)}`}</span>
        <p className={style.description}>{data?.description}</p>
        <table className={style.table}>
          <tbody>
            <tr>
              <td>Brand</td>
              <td>{data?.brand}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{data?.model}</td>
            </tr>
            {data?.color && (
              <tr>
                <td>Color</td>
                <td>{data?.color}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <div className={style.purchase}>
          <div className={style.price}>
            {data?.onSale ? (
              <>
                <div className={style.prices}>
                  <span className="single-product-new-price">
                    $
                    {(
                      data?.price -
                      (data?.price / 100) * data?.discount
                    ).toFixed(2)}
                  </span>
                  <span className={style.old_price}>
                    last price ${data?.price}
                  </span>
                </div>
                <span className={style.discount}>-{data?.discount}%</span>
              </>
            ) : (
              `$ ${data?.price}`
            )}
          </div>
          <div className={style.buttons}>
            <button className={style.blue}>Buy Now</button>
            {user && isInCart ? (
              <button disabled>In Cart</button>
            ) : (
              <button onClick={() => handleAddToCart()}>Add to cart</button>
            )}
          </div>
        </div>
        <ul className={style.advantages}>
          <li className={style.in_stock}>In Stock</li>
          <li className={style.guaranteed}>Guaranteed</li>
          {!data?.onSale && data?.price > 1000 && (
            <li className={style.delivery}>Free Delivery</li>
          )}
          {data?.onSale &&
            data?.price - (data?.price / 100) * data?.discount > 1000 && (
              <li className={style.delivery}>Free Delivery</li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default SingleProductCard;
