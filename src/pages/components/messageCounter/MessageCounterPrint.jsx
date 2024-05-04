import React from "react";
import Text from "../../../components/UI/text/Text";

export default function MessageCounterPrint({
  messageCount,
  isBackgroundImage = false,
}) {
  const textStyle = isBackgroundImage ? { color: "#fff" } : {};
  return (
    <Text font="bold16" style={textStyle}>
      {messageCount}
      <Text font="regular16" style={textStyle}>
        명이 작성했어요!
      </Text>
    </Text>
  );
}
