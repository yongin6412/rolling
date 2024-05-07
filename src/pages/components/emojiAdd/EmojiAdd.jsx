import { postReaction } from "../../../services/api";
import styles from "./EmojiAdd.module.scss";
import addImg from "./imgs/add.svg";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";

const EmojiAdd = ({ recipientId }) => {
  const EMOJI_DATA = {
    emoji: "",
    type: "",
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [emojiShow, setEmojiShow] = useState(false);
  const [emojiData, setEmojiData] = useState(EMOJI_DATA);

  const onClickShow = () => {
    setEmojiShow(!emojiShow);
  };

  const onEmojiAddClick = (e) => {
    if (emojiData.emoji === e.emoji && emojiData.type === "increase") {
      setEmojiData({
        ...emojiData,
        type: "decrease",
      });
    } else if (emojiData.emoji === e.emoji && emojiData.type === "decrease") {
      setEmojiData({
        ...emojiData,
        type: "increase",
      });
    } else {
      setEmojiData({
        emoji: e.emoji,
        type: "increase",
      });
    }
  };

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);

    const handlePostData = async (formData, recipientId) => {
      if (emojiData.emoji === "" || emojiData.type === "") {
        return;
      }
      await postReaction(formData, recipientId);
    };

    handlePostData(emojiData, recipientId);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [emojiData, recipientId]);

  return (
    <div className={styles.emoji_container}>
      <button className={styles.btn_border} onClick={onClickShow}>
        {windowWidth <= 360 ? (
          <img src={addImg} alt="이모지추가하기" />
        ) : (
          <div className={styles.add_button}>
            <img src={addImg} alt="이모지추가하기" />
            추가
          </div>
        )}
      </button>
      <div className={styles.emoji_picker_container}>
        {emojiShow && (
          <EmojiPicker
            onEmojiClick={onEmojiAddClick}
            className={styles.emoji_picker}
          />
        )}
      </div>
    </div>
  );
};

export default EmojiAdd;
