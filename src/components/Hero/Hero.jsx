import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.content}>
        <h1 className={style.title}>Tech Heim</h1>
        <div className={style.quote}>
          <span>&quot;Join the</span>
          <span className={style.orange}> digital revolution</span>&quot;
        </div>
        <button className={style.button}>Explore More</button>
      </div>
      <img src="../images/hero.jpg" alt="laptops" />
    </section>
  );
};

export default Hero;
