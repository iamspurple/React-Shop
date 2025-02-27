import { useNavigate } from "react-router-dom";

const Banner = () => {
  const goTo = useNavigate();
  return (
    <section className="banner">
      <div className="banner-images">
        <div className="banner-games">
          <img src="../images/banner-image.jpg" alt="game" />
          <img src="../images/banner-image2.jpg" alt="game" />
          <img src="../images/banner-image3.jpg" alt="game" />
          <img src="../images/banner-image4.jpg" alt="game" />
        </div>
        <div className="banner-games">
          <img src="../images/banner-image5.jpg" alt="game" />
          <img src="../images/banner-image6.jpg" alt="game" />
          <img src="../images/banner-image7.jpg" alt="game" />
          <img src="../images/banner-image8.jpg" alt="game" />
        </div>
      </div>
      <div className="banner-info">
        <p>Maximize your gaming experience with</p>
        <p className="accent">Play Station 5</p>
        <div className="banner-info-container">
          <img className="ps" src="../images/ps55.png" alt="ps5" />
          <button
            type="button"
            onClick={() => goTo("/products/27")}
            className="banner-button"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
