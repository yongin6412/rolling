import { useEffect, useState } from "react";
import RollingPaperCard from "../rollingPaperCard/RollingPaperCard";
import { getRecipientsList } from "../../../../services/api";
import styles from "./CardList.module.scss";
import { useNavigate } from "react-router-dom";
function CardList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const handleLoad = async () => {
    const recipientsList = await getRecipientsList();
    setList(recipientsList);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  const navigateToPostPage = (id) => {
    navigate(`/post/${id}`);
  };
  return (
    <>
      <div className={styles.list}>
        {!list.results && <span>가져오기 실패</span>}
        {list.results &&
          list.results.map((el) => (
            <div
              onClick={() => navigateToPostPage(el.id)}
              key={el.id}
              className={styles.button}
            >
              <RollingPaperCard
                name={el.name}
                messageCount={el.messageCount}
                recentMessages={el.recentMessages}
                backgroundImage={el.backgroundImageURL}
                backgroundColor={el.backgroundColor}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default CardList;
