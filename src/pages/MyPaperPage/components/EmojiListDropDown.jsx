import { useState } from "react";
import mockData from "../../../mocks(yi)/ReactionList";
import imgUrl from "./imgs/arrow_down.jpg";

const EmojiListDropDown = () => {
  const [showEmojiList, setShowEmojiList] = useState(false);
  const sliceList = mockData.results.slice(0, 8);
  const onClickEvent = () => {
    setShowEmojiList(!showEmojiList);
  };

  return (
    <div>
      <img onClick={onClickEvent} src={imgUrl} alt="이모지드롭다운" />
      {showEmojiList && (
        <div>
          {sliceList.map((list) => {
            return <EmojiList list={list} />;
          })}
        </div>
      )}
    </div>
  );
};

const EmojiList = ({ list }) => {
  return (
    <div>
      <div>{list.emoji}</div>
      <div>{list.count}</div>
    </div>
  );
};

export default EmojiListDropDown;
