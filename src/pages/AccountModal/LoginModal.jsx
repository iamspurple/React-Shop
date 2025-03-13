import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useState } from "react";

import Open from "/icons/open-eye.svg";
import Closed from "/icons/closed-eye.svg";
import Button from "/icons/close-button.svg";

import style from "./AccountModal.module.scss";

const LoginModal = ({ setLogin, getUserInfo, setOpened, setModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleLogin = (email, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setLogin(true);
        getUserInfo(user.uid);
        setOpened("login-okay");
        setTimeout(() => {
          setModal(false);
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setOpened("login-error");
        setTimeout(() => {
          setModal(false);
        }, 2000);
      });
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
          <div className={style.active}>Log In</div>
          <div onClick={() => setOpened("signup")} className={style.not_active}>
            Create Account
          </div>
        </div>
        <h2 className={style.title}>Log in to Tech Heim</h2>
        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
          <div className={style.email}>
            <input
              required
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.password}>
            <input
              required
              type={visible ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
            onClick={() => handleLogin(email, password)}
          >
            Log In
          </button>
        </form>
        <div className={style.link_container}>
          <span> Don&apos;t have an account?</span>

          <span onClick={() => setOpened("signup")} className={style.link}>
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
