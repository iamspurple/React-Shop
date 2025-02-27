import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import { useState } from "react";

import Open from "../../../public/icons/open-eye.svg";
import Closed from "../../../public/icons/closed-eye.svg";
import Button from "../../../public/icons/close-button.svg";

const LoginModal = ({ setOpened }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const dispatch = useDispatch();

  const goTo = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginUser({ email: user.email, id: user.uid }));
        goTo("/login");
      })
      .catch(console.error);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <button className="close-button" onClick={() => goTo(-1)} type="button">
          <img src={Button} alt="close" />
        </button>
        <div className="account-form-mode">
          <div className="active">Log In</div>
          <div onClick={() => setOpened("signup")} className="not-active">
            Create Account
          </div>
        </div>
        <h2 className="account-form-title">Log in to Tech Heim</h2>
        <form className="account-form" onSubmit={(e) => e.preventDefault()}>
          <div className="email">
            <input
              required
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              required
              type={visible ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="visible"
              onClick={() => toggleVisible()}
              type="button"
            >
              <img src={visible ? Open : Closed} alt="Change visability" />
            </button>
          </div>

          <button
            className="submit"
            type="submit"
            onClick={() => handleLogin(email, password)}
          >
            Log In
          </button>
        </form>
        <div className="account-form-link">
          <span> Don&apos;t have an account?</span>

          <span onClick={() => setOpened("signup")} className="link">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
