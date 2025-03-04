import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import { loginUser } from "../../store/slices/userSlice";
import Open from "/icons/open-eye.svg";
import Closed from "/icons/closed-eye.svg";
import Button from "/icons/close-button.svg";

import style from "./AccountModal.module.scss";

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
    <div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
      <div className={style.container}>
        <button
          className={style.close}
          onClick={() => setModal(false)}
          type="button"
        >
          <img src={Button} alt="close" />
        </button>
        <div className={style.mode}>
          <div onClick={() => setOpened("login")} className={style.not_active}>
            Log In
          </div>
          <div className={style.active}>Create Account</div>
        </div>
        <h2 className={style.title}>Create your account</h2>
        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
          <div className={style.username}>
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
          <div className={style.email}>
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
          <div className={style.password}>
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
              className={style.visible}
              onClick={() => toggleVisible()}
              type="button"
            >
              <img src={visible ? Open : Closed} alt="Change visability" />
            </button>
          </div>
          <button
            className={style.submit}
            type="submit"
            onClick={() => handleSignUp(userInfo.email, userInfo.password)}
          >
            Sign Up
          </button>
        </form>
        <div className={style.link_container}>
          <span>Already have an account?</span>

          <span onClick={() => setOpened("login")} className={style.link}>
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
