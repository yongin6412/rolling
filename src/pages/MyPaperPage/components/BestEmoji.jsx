import { useEffect, useState } from "react";
import mockData from "../../../mocks/recipientsId";

const BestEmoji = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    setEmojis(mockData.topReactions);
  }, []);
  console.log(emojis);

  return (
    <div>
      {emojis.map((emoji) => {
        return (
          <div key={emoji.id}>
            <div>{emoji.emoji}</div>
            <div>{emoji.count}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BestEmoji;
