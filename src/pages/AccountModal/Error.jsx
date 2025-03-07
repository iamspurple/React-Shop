import error from "/icons/error.svg";

import style from "./AccountModal.module.scss";

const Error = ({ act }) => {
  return (
    <div className={style.message}>
      <div className={style.container}>
        <div className={style.image}>
          <img src={error} alt="/" />
        </div>
        <h3 className={`${style.title} ${style.error}`}>Oops!</h3>
        <p className={style.description}>
          Unfortunately, there was a problem during {act} your account. Try
          again later.
        </p>
      </div>
    </div>
  );
};

export default Error;
