import { useEffect, useState } from "react";
import RollingPaperCard from "../rollingPaperCard/RollingPaperCard";
import { getRecipientsList } from "../../../../services/api";
import styles from "./CardList.module.scss";
import { useNavigate } from "react-router-dom";
function CardList({ order }) {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const handleLoad = async () => {
    const { results } = await getRecipientsList();
    setList(results);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  if (order === "desc") {
    list.sort((a, b) => b.messageCount - a.messageCount);
  }
  const navigateToPostPage = (id) => {
    navigate(`/post/${id}`);
  };
  console.log(list);
  return (
    <>
      <div className={styles.list}>
        {!list && <span>가져오기 실패</span>}
        {list &&
          list.slice(0, 4).map((el) => (
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
                topReactions={el.topReactions}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default CardList;
