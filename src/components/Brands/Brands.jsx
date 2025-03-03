import { useNavigate } from "react-router-dom";

import style from "./Brands.module.scss";

const Brands = () => {
  const goTo = useNavigate();

  return (
    <section className="brands">
      <div className={style.header}>
        <h2 className={style.title}>Top Brands</h2>
      </div>
      <ul className={style.list}>
        <li
          onClick={() => goTo("/products?search=apple")}
          className={style.item}
        >
          <a href="">
            <img src="../images/apple.svg" alt="apple" />
          </a>
        </li>
        <li
          onClick={() => goTo("/products?search=samsung")}
          className={style.item}
        >
          <a href="">
            <img src="../images/samsung.svg" alt="samsung" />
          </a>
        </li>
        <li
          onClick={() => goTo("/products?search=sony")}
          className={style.item}
        >
          <a href="">
            <img src="../images/sony.svg" alt="sony" />
          </a>
        </li>
        <li
          onClick={() => goTo("/products?search=asus")}
          className={style.item}
        >
          <a href="">
            <img src="../images/ASUS.svg" alt="Asus" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Brands;
