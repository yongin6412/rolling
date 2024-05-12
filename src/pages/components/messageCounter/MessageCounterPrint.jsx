import React from "react";
import Text from "../../../components/UI/text/Text";

export default function MessageCounterPrint({
  messageCount,
  isBackgroundImage = false,
  isPhone,
}) {
  const textStyle = isBackgroundImage ? { color: "#fff" } : {};

  let font = {
    count: "bold16",
    text: "regular16",
  };
  if (isPhone) {
    font.count = "bold14";
    font.text = "regular14";
  }

  // 호버이벤트
  const handleMouseEnter = (event) => {
    event.target.style.cursor = "default";
  };
  return (
    <Text font={font.count} style={textStyle} onMouseEnter={handleMouseEnter}>
      {messageCount}
      <Text font={font.text} style={textStyle}>
        명이 작성했어요!
      </Text>
    </Text>
  );
}
