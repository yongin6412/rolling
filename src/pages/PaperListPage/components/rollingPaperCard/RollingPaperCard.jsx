import React from "react";
import RollingPaperName from "../../../components/rollingPaperName/RollingPaperName";
import ProfileImagePreview from "../../../components/profileImagePreview/ProfileImagePreview";
import MessageCounter from "../../../components/messageCounter/MessageCounterPrint";
import styles from "./RollingPaperCard.module.scss";
import BestEmoji from "../../../components/bestEmoji/BestEmoji";

function RollingPaperCard({
  name,
  messageCount,
  recentMessages,
  backgroundImage,
  backgroundColor,
  topReactions,
  isPhone,
}) {
  const style = {
    backgroundImage: backgroundImage
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${backgroundImage})`
      : {},
    backgroundSize: backgroundImage ? "cover" : {},
  };

  return (
    <>
      <div
        className={`${styles.card} ${styles[backgroundColor]}`}
        style={style}
      >
        <div className={styles.name}>
          <RollingPaperName
            name={name}
            isBackgroundImage={backgroundImage}
            isPhone={isPhone}
          />
        </div>
        <div className={styles.image}>
          <ProfileImagePreview
            messageCount={messageCount}
            recentMessages={recentMessages}
          />
        </div>
        <MessageCounter
          page="list"
          messageCount={messageCount}
          isBackgroundImage={backgroundImage}
          isPhone={isPhone}
        />
        <hr className={styles.hr} />
        <BestEmoji topReactions={topReactions} />
      </div>
    </>
  );
}

export default RollingPaperCard;
