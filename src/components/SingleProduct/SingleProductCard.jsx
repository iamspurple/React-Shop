const SingleProductCard = ({ data }) => {
  return (
    <div className="single-product">
      <div className="single-product-image">
        <img src={data?.image} alt={data?.title} />
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
        <h1 className="single-product-title">{data?.title}</h1>
        <span className="single-product-rating">{`4.${Math.random()
          .toString()
          .split(".")[1]
          .substring(0, 1)}`}</span>
        <p className="single-product-descr">{data?.description}</p>
        <table>
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
        <div className="single-product-purchase">
          <div className="single-product-price">
            {data?.onSale ? (
              <>
                <div className="prices">
                  <span className="single-product-new-price">
                    $
                    {(
                      data?.price -
                      (data?.price / 100) * data?.discount
                    ).toFixed(2)}
                  </span>
                  <span className="single-product-old-price">
                    last price ${data?.price}
                  </span>
                </div>
                <span className="single-product-discount">
                  -{data?.discount}%
                </span>
              </>
            ) : (
              `$ ${data?.price}`
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
          {!data?.onSale && data?.price > 1000 && (
            <li className="delivery">Free Delivery</li>
          )}
          {data?.onSale &&
            data?.price - (data?.price / 100) * data?.discount > 1000 && (
              <li className="delivery">Free Delivery</li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default SingleProductCard;
