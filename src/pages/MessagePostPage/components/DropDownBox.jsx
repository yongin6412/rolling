import { useState } from "react";
import styles from "./DropDownBox.module.scss";
import arrowIconUrl from "../../../assets/icons/icon-arrow-bottom.svg";

function DropDownBox({ name, onChange, options }) {
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState(options[0].value);

  const toggleDropdown = () => {
    setIsDrop(!isDrop);
  };

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelected(selectedValue);
    setIsDrop(false);
    onChange(e);
  };

  return (
    <>
      <button className={styles.dropDownButton} onClick={toggleDropdown}>
        <nav>{selected}</nav>
        <img src={arrowIconUrl} />
      </button>

      {isDrop && (
        <div className={styles.options}>
          {options.map((option) => (
            <label key={option.id} className={styles.option}>
              <input
                name={name}
                type="radio"
                value={option.value}
                checked={selected === option.value}
                onChange={handleOptionChange}
              />
              {option.value}
            </label>
          ))}
        </div>
      )}
    </>
  );
}

export default DropDownBox;
