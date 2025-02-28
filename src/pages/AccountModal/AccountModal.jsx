import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const AccountModal = ({ setModal }) => {
  const [opened, setOpened] = useState("login");

  return (
    <div className="modal" onClick={() => setModal(false)}>
      {opened === "login" ? (
        <LoginModal setOpened={setOpened} setModal={setModal} />
      ) : (
        <SignUpModal setOpened={setOpened} setModal={setModal} />
      )}
    </div>
  );
};

export default AccountModal;
