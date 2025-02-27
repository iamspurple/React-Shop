import { contacts } from "../config";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="contact-us">
        <ul className="contact-list">
          <li className="contact-item office">
            <h3>Office</h3>
            <span>{contacts.address}</span>
          </li>
          <li className="contact-item email">
            <h3>E-mail</h3>
            <span>{contacts.email}</span>
          </li>
          <li className="contact-item phone">
            <h3>Phone</h3>
            <span>{contacts.phone}</span>
          </li>
        </ul>
        <div className="form-container">
          <div className="form-message">
            <h2>Message us</h2>
            <p>
              We&apos;re here to assist you every step of the way. Whether you
              have a question, need technical support, or simply want to share
              your feedback, our dedicated team is ready to listen and provide
              prompt assistance.
            </p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="* Your name" />
            <input type="email" placeholder="* E-mail" />
            <textarea placeholder="Message" className="text-area"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
