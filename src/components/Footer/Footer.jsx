import { contacts } from "../../config";
import facebook from "../../../public/icons/Facebook.svg";
import twitter from "../../../public/icons/twitter.svg";
import youtube from "../../../public/icons/Youtube.svg";
import instagram from "../../../public/icons/Instagram.svg";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <ul className={style.list}>
          <li className={style.item}>
            <span>Company</span>
            <ul className={style.innerList}>
              <li>About us</li>
              <li>Returns</li>
              <li>Order status</li>
            </ul>
          </li>
          <li className={style.item}>
            <span>Info</span>
            <ul className={style.innerList}>
              <li>How it works?</li>
              <li>Our promises</li>
              <li>FAQ</li>
            </ul>
          </li>
          <li className={style.item}>
            <span>Contact Us</span>
            <ul className={style.innerList}>
              <li className={`${style.contacts} ${style.address}`}>
                {contacts.address}
              </li>
              <li className={`${style.contacts} ${style.phone}`}>
                {contacts.phone}
              </li>
              <li className={`${style.contacts} ${style.email}`}>
                {contacts.email}
              </li>
            </ul>
          </li>
          <li className={style.item}>
            <span>Sign up for News and Updates</span>
            <form action="" className={style.form}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail Address"
              />
              <button type="submit">
                <span className={style.hidden}>Sign up</span>
              </button>
            </form>
            <ul className={style.socials}>
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
        <div className={style.extra}>
          <span> © 2023 Tech Heim</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
