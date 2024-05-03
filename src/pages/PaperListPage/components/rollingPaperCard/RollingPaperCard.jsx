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
}) {
  let color;
  const Style = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundColor: `${backgroundColor}`,
    color,
  };

  return (
    <>
      <div className={styles.card} style={Style}>
        <div className={styles.name}>
          <RollingPaperName name={name} isBackgroundImage={backgroundImage} />
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
        />
        <hr className={styles.hr} />
        <BestEmoji topReactions={topReactions} />
      </div>
    </>
  );
}

export default RollingPaperCard;
