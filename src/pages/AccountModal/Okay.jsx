import checkmark from "/icons/check.svg";

import style from "./AccountModal.module.scss";

const Okay = ({ act }) => {
  return (
    <div className={style.message}>
      <div className={style.container}>
        <div className={style.image}>
          <img src={checkmark} alt="/" />
        </div>
        <h3 className={style.title}>Well done</h3>
        <p className={style.description}>
          Congratulation your account has been successfully {act}.
        </p>
      </div>
    </div>
  );
};

export default Okay;
