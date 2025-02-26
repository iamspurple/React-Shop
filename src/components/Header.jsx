import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const goTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    goTo(`/products/search/${search}`);
  };

  const handleSearch = (text) => {
    dispatch(setSearch(text));
  };
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header-content">
          <img className="logo-image" src="/icons/logo.svg" alt="" />
          <nav>
            <ul className="nav-list">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <li>Home</li>
              </Link>
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li>Products</li>
              </Link>
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </nav>
          <ul className="icons-list">
            <li>
              <form className="header-form" onSubmit={(e) => handleSubmit(e)}>
                <input
                  placeholder="Search... "
                  type="search"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </form>
            </li>
            <li>
              <Link to="/cart">
                <img src="/icons/bag.svg" alt="cart" />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <img src="/icons/profile.svg" alt="login" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
