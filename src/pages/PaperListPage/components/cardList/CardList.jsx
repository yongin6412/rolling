import { useEffect, useState } from "react";
import RollingPaperCard from "../rollingPaperCard/RollingPaperCard";
import {
  getCustomRecipient,
  getRecipientsList,
} from "../../../../services/api";
import styles from "./CardList.module.scss";
import { useNavigate } from "react-router-dom";

function CardList({ order = "" }) {
  const [list, setList] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const navigate = useNavigate();

  const navigateToPostPage = (id) => {
    navigate(`/post/${id}`);
  };

  const handleLoad = async () => {
    const { results, next, previous } = await getRecipientsList({
      sort: order,
    });
    setList(results);
    setNextUrl(next);
    setPrevUrl(previous);
  };

  const handlePrevButton = async () => {
    const { results, next, previous } = await getCustomRecipient(prevUrl);
    setList(results);
    setNextUrl(next);
    setPrevUrl(previous);
  };
  const handleNextButton = async () => {
    const { results, next, previous } = await getCustomRecipient(nextUrl);
    setList(results);
    setNextUrl(next);
    setPrevUrl(previous);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <div className={styles.list}>
        {!list && <span>로딩 실패</span>}
        {prevUrl && <button onClick={handlePrevButton}>이전</button>}
        {list &&
          list.map((el) => (
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
        {nextUrl && <button onClick={handleNextButton}>다음</button>}
      </div>
    </>
  );
}

export default CardList;
