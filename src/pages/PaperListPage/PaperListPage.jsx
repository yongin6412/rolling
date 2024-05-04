import CardList from "./components/cardList/CardList";
import styles from "./PaperListPage.module.scss";
import PrimaryButton from "../../components/UI/PrimaryButton";
import { useNavigate } from "react-router-dom";
function PaperListPage() {
  const navigate = useNavigate();
  const style = {
    justifyContent: "center",
    alignItems: "center",
  };

  const handlePage = () => {
    navigate("/post");
  };

  return (
    <div className="page-wrapper" style={style}>
      <div className={styles.container}>
        <div className={styles.hot}>
          <h1>인기 롤링 페이퍼</h1>
          <CardList order="like" />
        </div>
        <div className={styles.new}>
          <h1>최근에 만든 롤링 페이퍼</h1>
          <CardList />
        </div>
        <div className={styles.buttonContainer}>
          <PrimaryButton onClick={handlePage}>나도 만들어 보기</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default PaperListPage;
