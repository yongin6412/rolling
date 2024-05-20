import styles from "./BestEmoji.module.scss";
import Text from "../../text/Text";
import { useLocation } from "react-router-dom";

const BestEmoji = ({ topReactions = [] }) => {
  const location = useLocation();
  const isListPage = location.pathname.startsWith("/list");
  return (
    <>
      {topReactions.length !== 0 ? (
        <div className={styles.emoji_container}>
          {topReactions.map((emoji) => {
            return (
              <div key={emoji.id} className={styles.badge_emoji}>
                <div>{emoji.emoji}</div>
                <Text font="regular16" style={{ color: "#ffffff" }}>
                  {emoji.count}
                </Text>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className={isListPage ? styles.hidden_message : styles.add_message}
        >
          이모지를 추가해주세요!!
        </div>
      )}
    </>
  );
};

export default BestEmoji;
