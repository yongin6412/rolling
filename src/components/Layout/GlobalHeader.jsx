import headerLogoImg from "../../../src/assets/icons/header-logo.svg";
import styles from "./GlobalHeader.module.css";
import { Link, useNavigate } from "react-router-dom";

function GlobalHeader({ isCreateButton }) {
  const navigate = useNavigate();
  const goToPost = () => {
    navigate("/post");
  };
  return (
    <div className={styles.header}>
      <Link to="/">
        <img
          className={styles.headerLogo}
          alt="header logo"
          src={headerLogoImg}
        />
      </Link>
      <button
        className={isCreateButton ? styles.createButton : styles.hidden}
        onClick={goToPost}
      >
        롤링 페이퍼 만들기
      </button>
    </div>
  );
}

export default GlobalHeader;
