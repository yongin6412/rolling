import styles from "../SelectBox/SelectBox.module.scss";
import checkImage from "../../../../assets/images/Enabled.svg";

const Checkbox = ({ id, type, color, image, isChecked, onCheckboxChange }) => {
  const ColorNumber = (colorName) => {
    switch (colorName) {
      case "beige":
        return "#ffe2ad";
      case "purple":
        return "#ecd9ff";
      case "blue":
        return "#b1e4ff";
      case "green":
        return "#d0f5c3";
      default:
        return "#ffe2ad";
    }
  };

  const ColorStyle = {
    background: `${ColorNumber(color)}`,
  };

  const imageStyle = {
    backgroundImage: image ? `url(${image})` : "none",
  };

  return (
    <>
      <label
        htmlFor={id}
        className={`${styles.selectLabel} ${isChecked ? "checked" : ""}`}
        style={type === "color" ? ColorStyle : imageStyle}
      >
        {isChecked && (
          <img className={styles.check} src={checkImage} alt="checked" />
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
