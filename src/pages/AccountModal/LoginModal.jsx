import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import { useState } from "react";

import Open from "../../../public/icons/open-eye.svg";
import Closed from "../../../public/icons/closed-eye.svg";

const LoginModal = () => {
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
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="account-form-mode">
            <div className="active">Log In</div>
            <div className="not-active">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/signup"
              >
                Create Account
              </Link>
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
            <Link
              style={{ textTransform: "none", color: "inherit" }}
              to="/signup"
            >
              <span className="link"> Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
