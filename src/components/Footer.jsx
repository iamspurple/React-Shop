import { contacts } from "../config";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <li className="footer-item">
            <span>Company</span>
            <ul className="footer-inner-list">
              <li>About us</li>
              <li>Returns</li>
              <li>Order status</li>
            </ul>
          </li>
          <li className="footer-item">
            <span>Info</span>
            <ul className="footer-inner-list">
              <li>How it works?</li>
              <li>Our promises</li>
              <li>FAQ</li>
            </ul>
          </li>
          <li className="footer-item">
            <span>Contact Us</span>
            <ul className="footer-inner-list">
              <li className="address-item contacts">{contacts.address}</li>
              <li className="phone-item contacts">{contacts.phone}</li>
              <li className="email-item contacts">{contacts.email}</li>
            </ul>
          </li>
          <li className="footer-item">
            <span>Sign up for News and Updates</span>
            <form action="" className="footer-form">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail Address"
              />
              <button type="submit">
                <span className="visually-hidden">Sign up</span>
              </button>
            </form>
            <ul className="footer-icons-list">
              <li>
                <a href="/">
                  <img src="../icons/Facebook.svg" alt="facebook" />
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  <img src="../icons/twitter.svg" alt="twitter" />
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  <img src="../icons/Instagram.svg" alt="twitter" />
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  <img src="../icons/Youtube.svg" alt="twitter" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="footer-extra">
          <span> © 2023 Tech Heim</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
