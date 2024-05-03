import React from "react";
import styles from "./RollingPaperName.module.scss";
const RollingPaperName = ({ name, isBackgroundImage }) => {
  let color = null;
  //console.log(isBackgroundImage);
  isBackgroundImage === null ? (color = "#181818") : (color = "#fff");
  const style = {
    color,
  };
  return (
    <div className={styles.text} style={style}>
      To. {name}
    </div>
  );
};

export default RollingPaperName;
