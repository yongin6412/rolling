import { useParams } from "react-router-dom";
import BestEmoji from "../../components/bestEmoji/BestEmoji";
import EmojiAdd from "../../components/emojiAdd/EmojiAdd";
import EmojiListDropDown from "../../components/emojiListDropDown/EmojiListDropDown";
import MessageCounterPrint from "../../components/messageCounter/MessageCounterPrint";
import ProfileImagePreview from "../../components/profileImagePreview/ProfileImagePreview";
import RollingPaperName from "../../components/rollingPaperName/RollingPaperName";
import styles from "./MyPageHeader.module.scss";
import { useEffect, useState } from "react";
import { getRecipientDetail } from "../../../services/api";
import ShareDropDown from "../../components/shareDropDown/ShareDropDown";

const MyPageHeader = () => {
  const { id } = useParams();
  const [myData, setMyData] = useState([]);
  const [headerWidth, setHeaderWidth] = useState(window.innerWidth);

  const getData = async (id) => {
    const data = await getRecipientDetail(id);
    setMyData(data);
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
    <div className={styles.header_container}>
      {headerWidth <= 600 ? (
        <div className={styles.mobile_header}>
          <div className={styles.header}>
            <RollingPaperName {...myData} />
          </div>
          <div className={styles.header}>
            <BestEmoji {...myData} />
            <EmojiListDropDown recipientId={id} />
            <EmojiAdd recipientId={id} />
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
          <EmojiAdd recipientId={id} />
          <div className={styles.pole}></div>
          <ShareDropDown />
        </div>
      )}
    </div>
  );
};

export default MyPageHeader;
