import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const AccountModal = () => {
  const [opened, setOpened] = useState("login");

  return (
    <div className="modal">
      {opened === "login" ? (
        <LoginModal setOpened={setOpened} />
      ) : (
        <SignUpModal setOpened={setOpened} />
      )}
    </div>
  );
};

export default AccountModal;
