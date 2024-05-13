import React from "react";
import Text from "../../../components/UI/text/Text";
const RollingPaperName = ({ name, backgroundImage, isPhone }) => {
  let font = null;
  if (isPhone) {
    font = "bold18";
  } else {
    font = "bold24";
  }
  const textStyle = backgroundImage ? { color: "#fff" } : {};
  return (
    <Text font={font} style={textStyle} darkTheme="dark-text">
      To. {name}
    </Text>
  );
};

export default RollingPaperName;
