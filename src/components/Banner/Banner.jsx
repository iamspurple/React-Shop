import { useNavigate } from "react-router-dom";

import style from "./Banner.module.scss";

const Banner = () => {
  const goTo = useNavigate();
  return (
    <section className={style.banner}>
      <div className={style.images}>
        <div className={style.games}>
          <img src="../images/banner-image.jpg" alt="game" />
          <img src="../images/banner-image2.jpg" alt="game" />
          <img src="../images/banner-image3.jpg" alt="game" />
          <img src="../images/banner-image4.jpg" alt="game" />
        </div>
        <div className={style.games}>
          <img src="../images/banner-image5.jpg" alt="game" />
          <img src="../images/banner-image6.jpg" alt="game" />
          <img src="../images/banner-image7.jpg" alt="game" />
          <img src="../images/banner-image8.jpg" alt="game" />
        </div>
      </div>
      <div className={style.info}>
        <p>Maximize your gaming experience with</p>
        <p className={style.accent}>Play Station 5</p>
        <div className={style.container}>
          <img className={style.ps} src="../images/ps55.png" alt="ps5" />
          <button
            type="button"
            onClick={() => goTo("/products/27")}
            className={style.button}
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
