import headerLogoImg from "../../../src/assets/icons/header-logo.svg";
import styles from "./GlobalHeader.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";

function GlobalHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const isPostPage = location.pathname.startsWith("/post"); // post 페이지인지 여부 확인

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
        className={!isPostPage ? styles.createButton : styles.hidden} // isPostPage가 false이면 버튼 표시
        onClick={goToPost}
      >
        <span className={styles.buttonText}>롤링 페이퍼 만들기</span>
      </button>
    </div>
  );
}

export default GlobalHeader;
