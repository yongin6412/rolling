import { MyPaperCard } from "./MyPaperCard";
import styles from "./MyPaperCardList.module.scss";
import { useEffect, useState } from "react";
import { getMessages, getRecipientDetail } from "../../../services/api";
import AddMessageCard from "./AddMessageCard";
import Modal from "./Modal/Modal";

const INITIAL_VALUE = {
  sender: "",
  profileImage: null,
  relationship: "",
  content: "",
  font: "",
  createdAt: "",
};
const INITIAL_RECIPIENT_VALUE = {
  backgroundColor: "",
  backgroundImageURL: null,
};
function MyPaperCardList({ id }) {
  const [userMessage, setUserMessage] = useState(INITIAL_VALUE);
  const [recipient, setRecipient] = useState(INITIAL_RECIPIENT_VALUE);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const onClickButton = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const handleLoad = async () => {
    const message = await getMessages(id);
    setUserMessage(message);
    const user = await getRecipientDetail(id);
    setRecipient(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const ColorNumber = (color) => {
    switch (color) {
      case "beige":
        return "#ffe2ad";
      case "purple":
        return "#ecd9ff";
      case "blue":
        return "#b1e4ff";
      case "green":
        return "#d0f5c3";
      default:
        return "#ffe2ad";
    }
  };

  const ColorStyle = {
    background: `${ColorNumber(recipient.backgroundColor)}`,
  };

  const imageStyle = {
    backgroundImage: recipient.backgroundImageURL
      ? ` linear-gradient(to bottom, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), 
          url(${recipient.backgroundImageURL})`
      : "none",
  };

  const sortedItems = userMessage.results
    ? userMessage.results.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    : [];

  return (
    <div
      className={styles.background}
      style={recipient.backgroundImageURL ? imageStyle : ColorStyle}
    >
      <div className={styles.cardList}>
        <AddMessageCard className={styles.addCard} id={id} />
        {sortedItems &&
          sortedItems.map((result) => (
            <MyPaperCard
              className={styles.card}
              onClick={() => onClickButton(result)}
              key={result.id}
              message={result}
            />
          ))}
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
            message={selectedMessage}
          />
        )}
      </div>
    </div>
  );
}

export default MyPaperCardList;
