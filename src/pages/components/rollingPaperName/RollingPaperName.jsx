import React from "react";
import Text from "../../../components/UI/text/Text";
const RollingPaperName = ({ name, isBackgroundImage, isPhone }) => {
  let font = null;
  if (isPhone) {
    font = "bold18";
  } else {
    font = "bold24";
  }
  const textStyle = isBackgroundImage ? { color: "#fff" } : {};
  return (
    <Text font={font} style={textStyle}>
      To. {name}
    </Text>
  );
};

export default RollingPaperName;
