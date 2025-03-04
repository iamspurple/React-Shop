import { contacts } from "../../config";

import style from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className="container">
      <div className={style.contact_us}>
        <ul className={style.list}>
          <li className={`${style.item} ${style.office}`}>
            <h3>Office</h3>
            <span>{contacts.address}</span>
          </li>
          <li className={`${style.item} ${style.email}`}>
            <h3>E-mail</h3>
            <span>{contacts.email}</span>
          </li>
          <li className={`${style.item} ${style.phone}`}>
            <h3>Phone</h3>
            <span>{contacts.phone}</span>
          </li>
        </ul>
        <div className={style.container}>
          <div className={style.message}>
            <h2>Message us</h2>
            <p>
              We&apos;re here to assist you every step of the way. Whether you
              have a question, need technical support, or simply want to share
              your feedback, our dedicated team is ready to listen and provide
              prompt assistance.
            </p>
          </div>
          <form className={style.form}>
            <input type="text" placeholder="* Your name" />
            <input type="email" placeholder="* E-mail" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
