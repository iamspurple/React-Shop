import { useParams } from "react-router-dom";
import { useGetProductByCategoryAndIdQuery } from "../../store/slices/productsApi";
import Similar from "./Similar";
import ScrollToTop from "../../config";

const SingleProduct = () => {
  const { category, id } = useParams();

  const { data, isLoading } = useGetProductByCategoryAndIdQuery({ category, id });

  ScrollToTop();

  if (isLoading === true) {
    return <h1>Loading...</h1>;
  }

  if (isLoading === false && !data) {
    return null;
  }

  const item = data[0]

  if (!item) return null

  return (
    <div className="container">
      <div className="single-product">
        <div className="single-product-image">
          <img src={item.image} alt={item.title} />
          <div className="single-product-icons">
            <button className="like">
              <img src="../icons/heart.svg" alt="like" />
              Add to Favorites
            </button>
            <button className="share">
              <img src="../icons/directbox-send.svg" alt="share" />
              Share
            </button>
          </div>
        </div>
        <div className="single-product-details">
          <h1 className="single-product-title">{item.title}</h1>
          <span className="single-product-rating">{`4.${Math.random()
            .toString()
            .split(".")[1]
            .substring(0, 1)}`}</span>
          <p className="single-product-descr">{item.description}</p>
          <table>
            <tbody>
              <tr>
                <td>Brand</td>
                <td>{item.brand}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{item.model}</td>
              </tr>
              {item.color && (
                <tr>
                  <td>Color</td>
                  <td>{item.color}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div>
          <div className="single-product-purchase">
            <div className="single-product-price">
              {item.onSale ? (
                <>
                  <div className="prices">
                    <span className="single-product-new-price">
                      $
                      {item.price -
                        (item.price / 100) * item.discount}
                    </span>
                    <span className="single-product-old-price">
                      last price $ {item.price}
                    </span>
                  </div>
                  <span className="single-product-discount">
                    -{item.discount}%
                  </span>
                </>
              ) : (
                `$ ${item.price}`
              )}
            </div>
            <div className="single-product-buttons">
              <button>Buy Now</button>
              <button>Add to cart</button>
            </div>
          </div>
          <ul className="single-product-advantages">
            <li className="in-stock">In Stock</li>
            <li className="guaranteed">Guaranteed</li>
            {!item.onSale && item.price > 1000 && (
              <li className="delivery">Free Delivery</li>
            )}
            {item.onSale &&
              item.price - (item.price / 100) * item.discount >
                1000 && <li className="delivery">Free Delivery</li>}
          </ul>
        </div>
      </div>

      <Similar
        category={item.category}
        brand={item.brand}
        id={item.id}
      />
    </div>
  );
};

export default SingleProduct;
