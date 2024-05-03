import styles from "./BestEmoji.module.scss";

const BestEmoji = ({ topReactions }) => {
  return (
    <>
      {topReactions && (
        <div className={styles.emoji_container}>
          {topReactions.map((emoji) => {
            return (
              <div key={emoji.id} className={styles.badge_emoji}>
                <div>{emoji.emoji}</div>
                <div>{emoji.count}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BestEmoji;
