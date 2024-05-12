import { useEffect, useState } from "react";
import arrowImgUrl from "../../../assets/images/arrow_down.svg";
import styles from "./EmojiListDropDown.module.scss";
import { getReactions } from "../../../services/api";

// MyPaperPage에서 postId(===recipientId)를 받아와서 사용
const EmojiListDropDown = ({ recipientId }) => {
  const [emojiData, setEmojiData] = useState([]);
  const [dataSlice, setDataSlice] = useState(11);
  const [showEmojiList, setShowEmojiList] = useState(false);

  const onClickEvent = () => {
    // 화면크기에 맞춰서 데이터 자르기
    const dataCount = window.innerWidth <= 768 ? 9 : 11;
    setDataSlice(dataCount);
    setShowEmojiList(!showEmojiList);
  };

  const handleLoad = async (recipientId) => {
    const getData = await getReactions(recipientId, dataSlice);
    setEmojiData(getData);
  };

  useEffect(() => {
    handleLoad(recipientId);
  }, []);

  return (
    <div>
      <img
        className={styles.arrow_img}
        onClick={onClickEvent}
        src={arrowImgUrl}
        alt="이모지리스트드롭다운"
      />
      <div className={styles.arrowDrop}>
        {showEmojiList && (
          <div className={styles.arrow_drop}>
            {emojiData.results.slice(3, dataSlice).map((list) => {
              return <EmojiList key={list.id} list={list} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const EmojiList = ({ list }) => {
  return (
    <div className={styles.emoji_container}>
      <div>{list.emoji}</div>
      <div className={styles.count}>{list.count}</div>
    </div>
  );
};

export default EmojiListDropDown;
