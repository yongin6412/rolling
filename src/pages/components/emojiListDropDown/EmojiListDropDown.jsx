import { useState } from "react";
import mockData from "../../../mocksYi/ReactionList";
import imgUrl from "./imgs/arrow_down.jpg";
import styles from "./EmojiListDropDown.module.scss";

const EmojiListDropDown = () => {
  const [showEmojiList, setShowEmojiList] = useState(false);
  const sliceList = mockData.results.slice(3, 11); // 이모지 횟수 순서가 많은 순서대로 4번째부터 8개 출력되게 만듬
  const onClickEvent = () => {
    setShowEmojiList(!showEmojiList);
  };

  return (
    <div>
      <img onClick={onClickEvent} src={imgUrl} alt="이모지드롭다운" />
      <div className={styles.arrowImg}>
        {showEmojiList && (
          <div className={styles.arrow_drop}>
            {sliceList.map((list) => {
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
