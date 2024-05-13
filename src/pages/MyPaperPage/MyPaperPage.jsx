import { useParams, useNavigate } from "react-router-dom";
import MyPaperCardList from "./components/MyPaperCardList";
import styles from "./MyPaperPage.module.scss";
import editIconUrl from "../../assets/icons/icon-edit.svg";
import MyPageHeader from "./myPageHeader/MyPageHeader";
import FadeInOut from "../../components/animation/FadeInOut";

function MyPaperPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <FadeInOut>
      <MyPageHeader />
      <div>
        <button
          className={styles.editButton}
          onClick={() => navigate(`/post/${id}/edit`)}
        >
          <img
            className={styles.editIcon}
            src={editIconUrl}
            alt="휴지통 아이콘"
          />
        </button>
        <MyPaperCardList id={id} />
      </div>
    </FadeInOut>
  );
}

export default MyPaperPage;
