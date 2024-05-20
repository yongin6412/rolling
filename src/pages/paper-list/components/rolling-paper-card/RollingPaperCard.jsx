import React from "react";
import RollingPaperName from "components/ui/rolling-header/rolling-paper-name/RollingPaperName";
import ProfileImagePreview from "components/ui/rolling-header/profile-preview/ProfileImagePreview";
import MessageCounter from "components/ui/rolling-header/message-counter/MessageCounterPrint";
import styles from "./RollingPaperCard.module.scss";
import BestEmoji from "components/ui/rolling-header/best-emoji/BestEmoji";

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
    border: backgroundImage ? "none" : undefined,
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
            backgroundImage={backgroundImage}
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
          messageCount={messageCount}
          backgroundImage={backgroundImage}
          isPhone={isPhone}
        />
        <hr className={styles.hr} />
        <BestEmoji topReactions={topReactions} />
      </div>
    </>
  );
}

export default RollingPaperCard;
