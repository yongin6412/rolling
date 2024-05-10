import CardList from "./components/cardList/CardList";
import styles from "./PaperListPage.module.scss";
import PrimaryButton from "../../components/UI/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function PaperListPage() {
  const navigate = useNavigate();
  const widthMax = useRef(false);
  const [isMobile, setIsMobile] = useState(null);
  const [isPhone, setIsPhone] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.width >= 360 && windowSize.width < 768) {
      widthMax.current = true;
    } else {
      widthMax.current = false;
    }
  }, [windowSize]);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handlePage = () => {
    navigate("/post");
  };

  useEffect(() => {
    setIsMobile(windowSize.width < 1920);
    setIsPhone(windowSize.width >= 360 && windowSize.width < 768);
  }, [windowSize]);

  return (
    <div className={styles.container}>
      <div className={styles.hot}>
        <h1>인기 롤링 페이퍼 🔥</h1>
        <CardList order="like" isMobile={isMobile} isPhone={isPhone} />
      </div>
      <div className={styles.new}>
        <h1>최근에 만든 롤링 페이퍼⭐</h1>
        <CardList isMobile={isMobile} isPhone={isPhone} />
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton onClick={handlePage} WidthMax={widthMax.current}>
          나도 만들어 보기
        </PrimaryButton>
      </div>
    </div>
  );
}

export default PaperListPage;
