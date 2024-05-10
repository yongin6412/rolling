import styles from "./Modal.module.scss";
import PrimaryButton from "../../../../components/UI/PrimaryButton";
import { formatDate } from "../MyPaperCard";

function relationship(message) {
  if (message.relationship === "친구") return styles.blue;
  else if (message.relationship === "지인") return styles.orange;
  else if (message.relationship === "가족") return styles.green;
  else if (message.relationship === "동료") return styles.purple;
}

function Modal({ onClose, message }) {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.senderInfo}>
          <img src={message.profileImageURL} alt="프로필 이미지" />
          <p className={styles.sender}>From.</p>
          <p className={styles.senderName}>{message.sender}</p>
          <p className={`${styles.relationship} ${relationship(message)}`}>
            {message.relationship}
          </p>
          <p className={styles.createDate}>{formatDate(message.createdAt)}</p>
        </div>
        <div className={styles.messageBorderLine}></div>
        <div className={styles.senderContent}>
          <p className={styles.content}>{message.content}</p>
        </div>
        <div className={styles.closeButtonContainer}>
          <PrimaryButton onClick={handleClose} size="sm" children="확인" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
