import { useParams, useNavigate } from "react-router-dom";
import MyPaperCardList from "./components/MyPaperCardList";
import styles from "./MyPaperPage.module.scss";
import trashIconUrl from "../../assets/icons/icon-trash.svg";
import MyPageHeader from "./myPageHeader/MyPageHeader";


function MyPaperPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <MyPageHeader />
      <div className="page-wrapper">

        <button
          className={styles.goEditButton}
          onClick={() => navigate(`/post/${id}/edit`)}
        >
          <img
            className={styles.trashIcon}
            src={trashIconUrl}
            alt="휴지통 아이콘"
          />
          편집하기
        </button>
        <MyPaperCardList id={id} />
      </div>
    </>
  );
}

export default MyPaperPage;
