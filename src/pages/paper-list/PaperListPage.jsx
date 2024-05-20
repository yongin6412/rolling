import CardList from "./components/card-list/CardList";
import styles from "./PaperListPage.module.scss";
import PrimaryButton from "../../components/ui/primary-button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import useBreakPoint from "../../hooks/useBreakPoint";
import FadeInOut from "../../components/animation/FadeInOut";

function PaperListPage() {
  const navigate = useNavigate();
  const { isMobile, isPhone } = useBreakPoint();

  const handleNavigationToPostPage = (cardId) => {
    navigate(`/post/${cardId}`);
  };

  return (
    <FadeInOut>
      <div className={`${styles.container} dark-list-page`}>
        <div className={styles.hot}>
          <h1 className={styles.h1}>인기 롤링 페이퍼 🔥</h1>
          <CardList
            order="like"
            isMobile={isMobile}
            isPhone={isPhone}
            onClick={handleNavigationToPostPage}
          />
        </div>
        <div className={styles.new}>
          <h1 className={styles.h1}>최근에 만든 롤링 페이퍼⭐</h1>
          <CardList
            isMobile={isMobile}
            isPhone={isPhone}
            onClick={handleNavigationToPostPage}
          />
        </div>
        <div className={styles.buttonContainer}>
          <PrimaryButton
            onClick={() => handleNavigationToPostPage("")}
            WidthMax={isMobile}
          >
            나도 만들어 보기
          </PrimaryButton>
        </div>
      </div>
    </FadeInOut>
  );
}

export default PaperListPage;
