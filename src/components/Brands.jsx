const Brands = () => {
  return (
    <section className="brands">
      <div className="brands-header">
        <h2 className="brands-title">Top Brands</h2>
      </div>
      <ul className="brands-list">
        <li className="brand-item">
          <a href="">
            <img src="../images/apple.svg" alt="apple" />
          </a>
        </li>
        <li className="brand-item">
          <a href="">
            <img src="../images/samsung.svg" alt="samsung" />
          </a>
        </li>
        <li className="brand-item">
          <a href="">
            <img src="../images/sony.svg" alt="sony" />
          </a>
        </li>
        <li className="brand-item">
          <a href="">
            <img src="../images/ASUS.svg" alt="Asus" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Brands;
