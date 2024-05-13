import headerLogoImg from "../../../src/assets/icons/icon-logo-img.svg";
import headerLogoText from "../../../src/assets/icons/icon-logo-text.svg";
import styles from "./GlobalHeader.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import darkIconUrl from "../../assets/icons/icon-dark.png";
import lightIconUrl from "../../assets/icons/icon-light.svg";
import useBreakPoint from "../../hooks/useBreakPoint";

function GlobalHeader({ handleToggleTheme, isDarkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isPostPage = location.pathname.startsWith("/post"); // post 페이지인지 여부 확인
  const { isMobile } = useBreakPoint();

  const goToPost = () => {
    navigate("/post");
  };

  return (
    <div className={`${styles.header} global-header`}>
      <Link to="/">
        <div className={styles.headerLogo}>
          <img alt="로고 이미지" src={headerLogoImg} />
          <img alt="로고 텍스트" src={headerLogoText} className="logo-text" />
        </div>
      </Link>

      <div>
        <button onClick={handleToggleTheme}>
          <img
            className={styles.themeButton}
            src={isDarkMode ? darkIconUrl : lightIconUrl}
            style={
              isPostPage && !isMobile
                ? { right: "500px" }
                : isPostPage && isMobile
                ? { right: "50px" }
                : {}
            }
            alt="테마 선택 아이콘"
          />
        </button>
        <button
          className={`${
            !isPostPage ? styles.createButton : styles.hidden
          } create-button`} // isPostPage가 false이면 버튼 표시
          onClick={goToPost}
        >
          <span className={`${styles.buttonText} create-button-text`}>
            롤링 페이퍼 만들기
          </span>
        </button>
      </div>
    </div>
  );
}

export default GlobalHeader;
