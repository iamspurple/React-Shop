import { contacts } from "../config";
import facebook from "../../public/icons/Facebook.svg";
import twitter from "../../public/icons/twitter.svg";
import youtube from "../../public/icons/Youtube.svg";
import instagram from "../../public/icons/Instagram.svg";

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
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={youtube} alt="youtube" />
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
