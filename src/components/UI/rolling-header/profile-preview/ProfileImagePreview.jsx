import React from "react";
import styles from "./ProfileImagePreview.module.scss";
function ProfileImagePreview({ messageCount, recentMessages = [] }) {
  let isCountVisibility = false;
  if (messageCount > 3) {
    isCountVisibility = true;
  }
  return (
    <>
      <div className={styles.profileContainer}>
        {recentMessages &&
          recentMessages.map((message, index) => (
            <img
              className={styles.img}
              key={message.id}
              src={message.profileImageURL}
              alt="profileImg"
              style={{
                transform: `translateX(${index * 16}px)`,
                zIndex: index,
              }}
            />
          ))}
        {isCountVisibility && (
          <div
            className={styles.span}
            style={{ transform: "translateX(48px)" }}
          >
            +{messageCount - 3}
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileImagePreview;
