import React from "react";
import styles from "./Text.module.scss";
const styleMap = {
  bold28: styles.Bold28,
  bold24: styles.Bold24,
  regular24: styles.Regular24,
  bold20: styles.Bold20,
  regular20: styles.Regular20,
  bold18: styles.Bold18,
  regular18: styles.Regular18,
  bold16: styles.Bold16,
  regular16: styles.Regular16,
  bold15: styles.Bold15,
  regular15: styles.Regular15,
  bold14: styles.Bold14,
  regular14: styles.Regular14,
  regular12: styles.Regular12,
};

const Text = ({ font, style, children, onMouseEnter }) => {
  const className = styleMap[font];
  return (
    <span className={className} style={style} onMouseEnter={onMouseEnter}>
      {children}
    </span>
  );
};

export default Text;
