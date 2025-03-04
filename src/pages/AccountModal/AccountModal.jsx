import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import style from "./AccountModal.module.scss";

const AccountModal = ({ setModal }) => {
  const [opened, setOpened] = useState("login");

  return (
    <div className={style.modal} onClick={() => setModal(false)}>
      {opened === "login" ? (
        <LoginModal setOpened={setOpened} setModal={setModal} />
      ) : (
        <SignUpModal setOpened={setOpened} setModal={setModal} />
      )}
    </div>
  );
};

export default AccountModal;
