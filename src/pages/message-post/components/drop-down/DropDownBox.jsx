import { useState, useRef } from "react";
import styles from "./DropDownBox.module.scss";
import arrowIconUrl from "../../../../assets/icons/icon-arrow-bottom.svg";
import { setFont } from "../../../my-paper/components/message-card/MyPaperCard";
import useOutsideClick from "../../../../hooks/useOutsideClick";

function DropDownBox({ name, onChange, options }) {
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropDownRef = useRef(null);

  useOutsideClick(dropDownRef, setIsDrop);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDrop(!isDrop);
  };

  const handleOptionChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSelected(value);
    setIsDrop(false);
    onChange(name, value);
  };

  const arrowIconStyle = {
    transform: isDrop ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <div className={styles.container} ref={dropDownRef}>
      <button className={styles.dropDownButton} onClick={toggleDropdown}>
        <div style={{ fontFamily: setFont(selected) }}>{selected}</div>
        <img
          alt="옵션 선택"
          src={arrowIconUrl}
          className={styles.arrowIcon}
          style={arrowIconStyle}
        />
      </button>

      {isDrop && (
        <div className={styles.options}>
          {options.map((option, index) => (
            <label
              key={index}
              className={styles.option}
              style={{ fontFamily: setFont(option) }}
            >
              <input
                name={name}
                type="radio"
                value={option}
                checked={selected === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownBox;
