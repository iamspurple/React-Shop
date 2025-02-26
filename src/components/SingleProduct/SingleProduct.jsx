import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/slices/productsApi";
import Similar from "./Similar";
import ScrollToTop from "../../config";

const SingleProduct = () => {
  const params = useParams();

  const { data } = useGetProductByIdQuery(params.id);

  ScrollToTop();

  return (
    <div className="container">
      <div className="single-product">
        <div className="single-product-image">
          <img src={data?.[0].image} alt={data?.[0].title} />
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
          <h1 className="single-product-title">{data?.[0].title}</h1>
          <span className="single-product-rating">{`4.${Math.random()
            .toString()
            .split(".")[1]
            .substring(0, 1)}`}</span>
          <p className="single-product-descr">{data?.[0].description}</p>
          <table>
            <tbody>
              <tr>
                <td>Brand</td>
                <td>{data?.[0].brand}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{data?.[0].model}</td>
              </tr>
              {data?.[0].color && (
                <tr>
                  <td>Color</td>
                  <td>{data?.[0].color}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div>
          <div className="single-product-purchase">
            <div className="single-product-price">
              {data?.[0].onSale ? (
                <>
                  <div className="prices">
                    <span className="single-product-new-price">
                      $
                      {data?.[0].price -
                        (data?.[0].price / 100) * data?.[0].discount}
                    </span>
                    <span className="single-product-old-price">
                      last price $ {data?.[0].price}
                    </span>
                  </div>
                  <span className="single-product-discount">
                    -{data?.[0].discount}%
                  </span>
                </>
              ) : (
                `$ ${data?.[0].price}`
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
            {!data?.[0].onSale && data?.[0].price > 1000 && (
              <li className="delivery">Free Delivery</li>
            )}
            {data?.[0].onSale &&
              data?.[0].price - (data?.[0].price / 100) * data?.[0].discount >
                1000 && <li className="delivery">Free Delivery</li>}
          </ul>
        </div>
      </div>
      <Similar
        category={data?.[0].category}
        brand={data?.[0].brand}
        id={data?.[0].id}
      />
    </div>
  );
};

export default SingleProduct;
