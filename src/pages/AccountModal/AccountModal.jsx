import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import style from "./AccountModal.module.scss";
import Okay from "./Okay";
import Error from "./Error";

const AccountModal = ({ setLogin, getUserInfo, setModal }) => {
  const [opened, setOpened] = useState("login");

  return (
    <div className={style.modal} onClick={() => setModal(false)}>
      {opened === "login" && (
        <LoginModal
          setLogin={setLogin}
          getUserInfo={getUserInfo}
          setOpened={setOpened}
          setModal={setModal}
        />
      )}
      {opened === "signup" && (
        <SignUpModal setOpened={setOpened} setModal={setModal} />
      )}
      {opened === "login-okay" && <Okay act={"logged in"} />}
      {opened === "login-error" && <Error act={"logging in"} />}
      {opened === "signup-okay" && <Okay act={"created"} />}
      {opened === "signup-error" && <Error act={"creating"} />}
    </div>
  );
};

export default AccountModal;
