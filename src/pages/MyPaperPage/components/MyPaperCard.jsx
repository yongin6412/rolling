import styles from "./MyPaperCard.module.scss";

export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}.${
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
  }.${date.getDate() + 1 > 9 ? date.getDate() : "0" + date.getDate()}`;
}
function relationship(message) {
  if (message.relationship === "친구") return styles.blue;
  else if (message.relationship === "지인") return styles.orange;
  else if (message.relationship === "가족") return styles.green;
  else if (message.relationship === "동료") return styles.purple;
}

export function MyPaperCard({ message, onClick }) {
  return (
    <div className={styles.messageCard} onClick={onClick}>
      <div className={styles.senderHeader}>
        <img src={message.profileImageURL} alt="프로필 이미지" />
        <p className={styles.sender}>From.</p>
        <p className={styles.senderName}>{message.sender}</p>
        <p className={`${styles.relationship} ${relationship(message)}`}>
          {message.relationship}
        </p>
      </div>
      <hr />
      <p className={styles.content}>{message.content}</p>
      <p className={styles.createDate}>{formatDate(message.createdAt)}</p>
    </div>
  );
}
