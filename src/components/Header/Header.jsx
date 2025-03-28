import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
  NavLink,
} from "react-router-dom";

import signout from "/icons/signout.svg";
import heart from "/icons/favorite.svg";

import style from "./Header.module.scss";

const Header = ({ auth, isAuth, setIsAuth, data, setModal, login }) => {
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
    <header id="header" className={style.header}>
      <div className="container">
        <div className={style.content}>
          <img className="logo-image" src="/icons/logo.svg" alt="" />
          <nav>
            <ul className={style.navlist}>
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
          <ul className={style.controls}>
            <li>
              <form
                autoComplete="off"
                className={style.form}
                onSubmit={(e) => handleSubmit(e)}
              >
                <input placeholder="Search... " type="search" name="search" />
              </form>
            </li>
            {isAuth && data && (
              <li className={style.account}>
                <Link style={{ display: "flex" }} to="/favorites">
                  <img width={24} src={heart} alt="favorites" />
                </Link>
              </li>
            )}
            <li className={style.cart}>
              <Link style={{ color: "inherit" }} to="/cart">
                <img src="/icons/bag.svg" alt="cart" />
                {login && isAuth && data && (
                  <span>
                    {data?.[0]?.cart?.length > 0
                      ? data?.[0]?.cart?.length
                      : null}
                  </span>
                )}
              </Link>
            </li>
            {!isAuth && (
              <li style={{ cursor: "pointer" }} onClick={() => setModal(true)}>
                <img src="/icons/profile.svg" alt="login" />
              </li>
            )}
            {login && isAuth && data && (
              <>
                <li className={style.account}>
                  <span> {data?.[0]?.name}</span>
                </li>
                <li className={style.account}>
                  <button
                    onClick={() => {
                      if (window.confirm("Sign out?")) {
                        auth.signOut();
                        setIsAuth(null);
                      }
                    }}
                  >
                    <img src={signout} alt="sign out" />
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
