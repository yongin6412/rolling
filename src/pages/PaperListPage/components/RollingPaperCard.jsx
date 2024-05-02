import React from "react";
import RollingPaperName from "../../components/rollingPaperName/RollingPaperName";
import ProfileImagePreview from "../../components/profileImagePreview/ProfileImagePreview";
import MessageCounter from "../../components/messageCounter/MessageCounterPrint";
import styles from "./RollingPaperCard.module.scss";
function RollingPaperCard() {
  const backgroundColor = "";
  return (
    <>
      <div className={styles.card} style={{ backgroundColor }}>
        <div className={styles.name}>
          <RollingPaperName />
        </div>
        <div className={styles.image}>
          <ProfileImagePreview />
        </div>
        <MessageCounter page="list" />
        <hr className={styles.hr} />
      </div>
    </>
  );
}
export default RollingPaperCard;
