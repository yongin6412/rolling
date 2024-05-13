import styles from "../SelectBox/SelectBox.module.scss";
import CheckImage from "../../../../assets/images/Enabled.svg";

const Checkbox = ({ id, type, color, image, isChecked, onCheckboxChange }) => {
  const colorNumber = (colorName) => {
    switch (colorName) {
      case "beige":
        return "#ffe2ad";
      case "purple":
        return "#ecd9ff";
      case "blue":
        return "#b1e4ff";
      case "green":
        return "#d0f5c3";
    }
  };

  const backgroundStyle =
    type === "color"
      ? { background: `${colorNumber(color)}` }
      : { backgroundImage: `url(${image})`, border: "none" };
  const checkboxStyle = isChecked ? { opacity: 0.6 } : {}; // 선택된 박스에 opacity 적용

  return (
    <>
      <label
        htmlFor={id}
        className={`${styles.selectLabel} ${isChecked ? "checked" : ""}`}
        style={{ ...backgroundStyle, ...checkboxStyle }}
      >
        {isChecked && (
          <img className={styles.check} src={CheckImage} alt="checked" />
        )}
      </label>
      <input
        className={styles.checkboxInput}
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => onCheckboxChange(id)}
      />
    </>
  );
};

export default Checkbox;
