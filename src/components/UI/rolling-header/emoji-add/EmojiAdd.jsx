import styles from "./EmojiAdd.module.scss";
import addImg from "assets/images/add.svg";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";

const EmojiAdd = ({ handlePostEmojiData }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [emojiShow, setEmojiShow] = useState(false);
  const style = windowWidth <= 500 ? 250 : 350;

  const handleEmojiShow = () => {
    setEmojiShow(!emojiShow);
  };

  const onEmojiAddClick = (e) => {
    handlePostEmojiData(e.emoji);
    setEmojiShow(!emojiShow);
  };

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div className={styles.emoji_container}>
      <button className={styles.btn_border} onClick={handleEmojiShow}>
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
            // 이모지라이브러리 반응형 사이즈조절하기위해서 인라인스타일지정 (라이브러리에서 인라인으로 스타일이 적용되어있어서 scss 적용안됨)
            style={{ width: style }}
            onEmojiClick={onEmojiAddClick}
          />
        )}
      </div>
    </div>
  );
};

export default EmojiAdd;
