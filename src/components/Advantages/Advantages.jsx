import style from "./Advantages.module.scss";

const Advantages = () => {
  return (
    <section className={style.advantages}>
      <ul className={style.list}>
        <li className={style.item}>
          <img src="../icons/tech.svg" alt="" />
          <span>Latest and Greatest Tech</span>
        </li>
        <li className={style.item}>
          <img src="../icons/guarantee.svg" alt="" />
          <span>Guarantee</span>
        </li>
        <li className={style.item}>
          <img src="../icons/shipping.svg" alt="" />
          <span>Free Shipping Over 1000$</span>
        </li>
        <li className={style.item}>
          <img src="../icons/support.svg" alt="" />
          <span>24/7 Support</span>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
