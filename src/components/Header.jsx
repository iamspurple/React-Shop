import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
  NavLink,
} from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const goTo = useNavigate();

  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target["search"].value;

    if (text) {
      location.pathname === "/products"
        ? setSearchParams({ search: text })
        : goTo(`/products?search=${text}`);
      return;
    }
    setSearchParams();
  };

  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header-content">
          <img className="logo-image" src="/icons/logo.svg" alt="" />
          <nav>
            <ul className="nav-list">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#0c68f4" : "inherit",
                })}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/products"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#0c68f4" : "inherit",
                })}
              >
                <li>Products</li>
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#0c68f4" : "inherit",
                })}
              >
                <li>Contact Us</li>
              </NavLink>
            </ul>
          </nav>
          <ul className="icons-list">
            <li>
              <form
                autoComplete="off"
                className="header-form"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input placeholder="Search... " type="search" name="search" />
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
