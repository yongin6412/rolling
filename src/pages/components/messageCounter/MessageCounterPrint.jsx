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

  return (
    <Text font={font.count} style={textStyle}>
      {messageCount}
      <Text font={font.text} style={textStyle}>
        명이 작성했어요!
      </Text>
    </Text>
  );
}
