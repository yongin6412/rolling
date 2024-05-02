import { useEffect, useState } from "react";
import mockData from "../../../mocksYi/recipientsId";
import styles from "./BestEmoji.module.css";

const BestEmoji = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    setEmojis(mockData.topReactions);
  }, []);
  console.log(emojis);

  return (
    <div className={styles.emoji_container}>
      {emojis.map((emoji) => {
        return (
          <div key={emoji.id} className={styles.badge_emoji}>
            <div>{emoji.emoji}</div>
            <div>{emoji.count}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BestEmoji;
