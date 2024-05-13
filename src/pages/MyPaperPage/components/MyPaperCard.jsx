import { useState } from "react";
import trashIconUrl from "../../../assets/icons/icon-trash.svg";
import styles from "./MyPaperCard.module.scss";

export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}.${
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
  }.${date.getDate() + 1 > 9 ? date.getDate() : "0" + date.getDate()}`;
}

function setRelationship(relationship) {
  switch (relationship) {
    case "친구":
      return styles.blue;
    case "지인":
      return styles.orange;
    case "가족":
      return styles.green;
    case "동료":
      return styles.purple;
  }
}

export function setFont(font) {
  switch (font) {
    case "Pretendard":
      return "Pretendard";
    case "Noto Sans":
      return "Noto Sans";
    case "나눔명조":
      return "NanumMyeongjo";
    case "나눔손글씨 손편지체":
      return "NanumPen";
  }
}

export function MyPaperCard({
  message,
  onClick,
  isAddMessagePossible,
  deleteMessage,
}) {
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  const handleMessageDelete = (e) => {
    e.stopPropagation();
    deleteMessage(message.id);
    setIsMessageVisible(false); // 휴지통 버튼 누르면 카드 숨김
  };

  return (
    <div
      className={styles.messageCard}
      style={{
        display: isMessageVisible ? "block" : "none",
        cursor: isAddMessagePossible ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <div className={styles.senderHeader}>
        <img src={message.profileImageURL} alt="프로필 이미지" />
        <p className={styles.sender}>From.</p>
        <p className={styles.senderName}>{message.sender}</p>
        <p
          className={`${styles.relationship} ${setRelationship(
            message.relationship
          )}`}
        >
          {message.relationship}
        </p>
        {!isAddMessagePossible && (
          <button
            className={styles.trashIconButton}
            onClick={handleMessageDelete}
          >
            <img
              className={styles.trashIcon}
              src={trashIconUrl}
              alt="휴지통 버튼"
            />
          </button>
        )}
      </div>
      <hr className={styles.hr} />
      <p
        className={styles.content}
        style={{ fontFamily: setFont(message.font) }}
      >
        {message.content}
      </p>
      <p className={styles.createDate}>{formatDate(message.createdAt)}</p>
    </div>
  );
}
