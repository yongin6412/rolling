import { MyPaperCard } from "../message-card/MyPaperCard";
import styles from "./MyPaperCardList.module.scss";
import { useState } from "react";
import { getMessages, getRecipientDetail } from "../../../../services/api";
import AddMessageCard from "../add-message/AddMessageCard";
import Modal from "../modal/Modal";
import useFetch from "../../../../hooks/useFetch";

const INITIAL_MESSAGE_DATA = {
  sender: "",
  profileImage: null,
  relationship: "",
  content: "",
  font: "",
  createdAt: "",
};

const INITIAL_PAPER_DATA = {
  backgroundColor: "",
  backgroundImageURL: null,
};

function MyPaperCardList({ id, isAddMessagePossible = true, deleteMessage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const recipient = useFetch(() => getRecipientDetail(id), INITIAL_PAPER_DATA);
  const message = useFetch(() => getMessages(id), INITIAL_MESSAGE_DATA);

  const handleClickCard = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const setBackgroundColor = (color) => {
    // eslint-disable-next-line
    switch (color) {
      case "beige":
        return "#ffe2ad";
      case "purple":
        return "#ecd9ff";
      case "blue":
        return "#b1e4ff";
      case "green":
        return "#d0f5c3";
    }
  };

  const ColorStyle = {
    background: `${setBackgroundColor(recipient.backgroundColor)}`,
  };

  const imageStyle = {
    backgroundImage: recipient.backgroundImageURL
      ? ` linear-gradient(to bottom, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), 
          url(${recipient.backgroundImageURL})`
      : "none",
  };

  const sortedMessages = message.results
    ? message.results.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    : [];

  return (
    <div
      className={styles.background}
      style={recipient.backgroundImageURL ? imageStyle : ColorStyle}
    >
      <div className={styles.cardList}>
        {isAddMessagePossible && (
          <AddMessageCard className={styles.addCard} id={id} />
        )}
        {sortedMessages &&
          sortedMessages.map((message) => (
            <MyPaperCard
              className={styles.message}
              onClick={() => handleClickCard(message)}
              key={message.id}
              message={message}
              isAddMessagePossible={isAddMessagePossible}
              deleteMessage={deleteMessage}
            />
          ))}
        {isAddMessagePossible && isModalOpen && (
          <Modal
            style={{ cursor: isAddMessagePossible ? "pointer" : "default" }}
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
