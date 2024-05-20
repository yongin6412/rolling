import { useParams } from "react-router-dom";
import BestEmoji from "components/ui/rolling-header/best-emoji/BestEmoji";
import EmojiAdd from "components/ui/rolling-header/emoji-add/EmojiAdd";
import EmojiListDropDown from "components/ui/rolling-header/emoji-drop-down/EmojiListDropDown";
import MessageCounterPrint from "components/ui/rolling-header/message-counter/MessageCounterPrint";
import ProfileImagePreview from "components/ui/rolling-header/profile-preview/ProfileImagePreview";
import RollingPaperName from "components/ui/rolling-header/rolling-paper-name/RollingPaperName";
import styles from "./MyPageHeader.module.scss";
import { useEffect, useState } from "react";
import { getRecipientDetail, postReaction } from "services/api";
import ShareDropDown from "components/ui/rolling-header/share-drop-down/ShareDropDown";

const MyPageHeader = () => {
  const { id } = useParams();
  const [myData, setMyData] = useState([]);
  const [headerWidth, setHeaderWidth] = useState(window.innerWidth);

  const getData = async (id) => {
    const data = await getRecipientDetail(id);
    setMyData(data);
  };

  // Add 컴포넌트에서 이모지를 받아와서 API로 보냄과 동시에 데이터를 받아옴
  const handlePostEmojiData = async (emoji) => {
    await postReaction({ emoji: emoji, type: "increase" }, id);
    await getData(id);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  useEffect(() => {
    const resizeWidth = () => {
      setHeaderWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, []);

  return (
    <div className={`${styles.header_container} dark-rolling-header`}>
      {headerWidth <= 600 ? (
        <div className={`${styles.mobile_header} dark-rolling-header`}>
          <div className={`${styles.header} dark-rolling-header`}>
            <RollingPaperName {...myData} />
          </div>
          <div className={styles.header}>
            <BestEmoji {...myData} />
            <EmojiListDropDown recipientId={id} />
            <EmojiAdd
              recipientId={id}
              handlePostEmojiData={handlePostEmojiData}
            />
            <div className={styles.pole}></div>
            <ShareDropDown />
          </div>
        </div>
      ) : (
        <div className={styles.header}>
          <div className={styles.mypage_name}>
            <RollingPaperName {...myData} />
          </div>
          {headerWidth <= 900 ? (
            <></>
          ) : (
            <>
              <ProfileImagePreview {...myData} />
              <MessageCounterPrint {...myData} />
              <div className={styles.pole}></div>
            </>
          )}
          <BestEmoji {...myData} />
          <EmojiListDropDown recipientId={id} />
          <EmojiAdd
            recipientId={id}
            handlePostEmojiData={handlePostEmojiData}
          />
          <div className={styles.pole}></div>
          <ShareDropDown />
        </div>
      )}
    </div>
  );
};

export default MyPageHeader;
