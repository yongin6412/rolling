import { useEffect, useState } from "react";
import mockData from "../../../mocksYi/ReactionList";
import imgUrl from "./imgs/arrow_down.svg";
import styles from "./EmojiListDropDown.module.scss";

const EmojiListDropDown = () => {
  const [emojiData, setEmojiData] = useState([]);
  const [dataSlice, setDataSlice] = useState(11);
  const [showEmojiList, setShowEmojiList] = useState(false);

  const onClickEvent = () => {
    const dataCount = window.innerWidth <= 768 ? 9 : 11;
    setDataSlice(dataCount);
    setShowEmojiList(!showEmojiList);
  };

  useEffect(() => {
    setEmojiData(mockData);
  }, []);

  return (
    <div>
      <img
        className={styles.arrow_img}
        onClick={onClickEvent}
        src={imgUrl}
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
      <div>{list.count}</div>
    </div>
  );
};

export default EmojiListDropDown;
