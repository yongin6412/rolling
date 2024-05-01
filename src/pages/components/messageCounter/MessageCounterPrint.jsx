import React from "react";
import idMock from "../../../mocks/recipientsId.js";
import styles from "./MessageCounterPrint.module.scss";
export default function MessageCounterPrint({
  isBackgroundImage = false,
  page = "post",
}) {
  let styleDiv;
  let styleSpan;
  if (page === "list") {
    isBackgroundImage
      ? (styleDiv = styles.listWhite)
      : (styleDiv = styles.list);
    styleSpan = styles.listSpan;
  } else {
    styleDiv = styles.post;
    styleSpan = styles.postSpan;
  }
  const messageCount = idMock.messageCount;
  return (
    <div className={styleDiv}>
      {messageCount}
      <span className={styleSpan}>명이 작성했어요!</span>
    </div>
  );
}
