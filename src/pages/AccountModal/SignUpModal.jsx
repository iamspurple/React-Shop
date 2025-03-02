import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import { loginUser } from "../../store/slices/userSlice";
import Open from "../../../public/icons/open-eye.svg";
import Closed from "../../../public/icons/closed-eye.svg";
import Button from "../../../public/icons/close-button.svg";

import { useState } from "react";

const SignUpModal = ({ setOpened, setModal }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  const dispatch = useDispatch();

  const goTo = useNavigate();

  const handleSignUp = (email, password) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginUser({ email: user.email, id: user.uid }));
        goTo("/login");
      })
      .catch(console.error);
  };

  return (
    <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
      <div className="modal-container">
        <button
          className="close-button"
          onClick={() => setModal(false)}
          type="button"
        >
          <img src={Button} alt="close" />
        </button>
        <div className="account-form-mode">
          <div onClick={() => setOpened("login")} className="not-active">
            Log In
          </div>
          <div className="active">Create Account</div>
        </div>
        <h2 className="account-form-title">Create your account</h2>
        <form className="account-form" onSubmit={(e) => e.preventDefault()}>
          <div className="username">
            <input
              required
              className="username"
              type="text"
              value={userInfo.name}
              placeholder="Username"
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
          </div>
          <div className="email">
            <input
              required
              className="email"
              type="email"
              value={userInfo.email}
              placeholder="E-mail"
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>
          <div className="password">
            <input
              required
              className="password"
              type={visible ? "text" : "password"}
              value={userInfo.password}
              placeholder="Password"
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
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
            onClick={() => handleSignUp(userInfo.email, userInfo.password)}
          >
            Sign Up
          </button>
        </form>
        <div className="account-form-link">
          <span>Already have an account?</span>

          <span onClick={() => setOpened("login")} className="link">
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
