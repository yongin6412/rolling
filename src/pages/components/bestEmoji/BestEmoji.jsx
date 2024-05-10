import styles from "./BestEmoji.module.scss";
import Text from "../../../components/UI/text/Text";

const style = {
  color: "#fff",
};

const BestEmoji = ({ topReactions }) => {
  return (
    <>
      {topReactions && (
        <div className={styles.emoji_container}>
          {topReactions.map((emoji) => {
            return (
              <div key={emoji.id} className={styles.badge_emoji}>
                <div>{emoji.emoji}</div>
                <Text font="regular16" style={style}>
                  {emoji.count}
                </Text>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BestEmoji;
