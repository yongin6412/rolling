import styles from "./AddMessageCard.module.scss";
import addButton from "../../../../../src/assets/icons/add-papercard-button.svg";
import { Link, useNavigate } from "react-router-dom";

function AddMessageCard({ id }) {
  const navigate = useNavigate();
  const addCard = () => {
    navigate(`/post/${id}/message`);
  };
  return (
    <div className={styles.addMessageCard}>
      <Link to={`/post/${id}/message`}>
        <button className={styles.addButton} onClick={addCard}>
          <img
            className={styles.addButtonImg}
            src={addButton}
            alt="롤링 페이퍼 카드 추가 버튼"
          />
        </button>
      </Link>
    </div>
  );
}

export default AddMessageCard;
