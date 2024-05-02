import React from "react";
import idMock from "../../../mocks/recipientsId";
import styles from "./RollingPaperName.module.scss";
const RollingPaperName = () => {
  return <div className={styles.text}>To. {idMock.name}</div>;
};

export default RollingPaperName;
