const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Tech Heim</h1>
        <div className="hero-quote">
          <span>&quot;Join the</span>
          <span className="orange"> digital revolution</span>&quot;
        </div>
        <button className="hero-button">Explore More</button>
      </div>
      <img src="../images/hero.jpg" alt="laptops" />
    </section>
  );
};

export default Hero;
