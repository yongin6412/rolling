import { useEffect, useState } from "react";
import { getImages } from "../../../../services/api";
import ToggleButton from "../toggle-button/ToggleButton";
import Checkbox from "../check-box/CheckBox";
import styles from "./SelectBox.module.scss";

const COLOR = ["beige", "purple", "blue", "green"];

const SELECT = [
  { label: "컬러", value: "color" },
  { label: "이미지", value: "image" },
];

const checkDefalut = {
  checkBox1: false,
  checkBox2: false,
  checkBox3: false,
  checkBox4: false,
};

function SelectBox({ onSelectionChange, onSelectTypeChange }) {
  const [backgroundType, setBackgroundType] = useState("color");
  const [imageUrls, setImageUrls] = useState([]);
  const [isChecked, setIsChecked] = useState({
    ...checkDefalut,
    checkBox1: true,
  });

  const handleCheckboxChange = (checkboxId) => {
    const check = { ...checkDefalut };

    check[`checkBox${checkboxId + 1}`] = true;
    setIsChecked(check);

    const newBackgroundColor = COLOR[checkboxId] || "";
    const newImageURL = imageUrls[checkboxId] || "";

    onSelectionChange({
      backgroundColor: newBackgroundColor,
      imageURL: newImageURL,
    });
  };

  const fetchImgUrls = async () => {
    const imgUrls = await getImages("background-images");
    setImageUrls(imgUrls);
  };

  useEffect(() => {
    fetchImgUrls();
  }, []);

  return (
    <>
      <div className={styles.toggleBox}>
        <ToggleButton
          items={SELECT}
          selected={backgroundType}
          onClickItem={(selectType) => {
            setBackgroundType(selectType);
            onSelectTypeChange(selectType);
          }}
        />
      </div>

      <div className={styles.selectorBox}>
        {imageUrls.map((imageUrl, index) => (
          <Checkbox
            key={`checkBox${index + 1}`}
            id={`checkBox${index + 1}`}
            type={backgroundType}
            color={COLOR[index]}
            image={imageUrl}
            isChecked={isChecked[`checkBox${index + 1}`]}
            onCheckboxChange={() => handleCheckboxChange(index)}
          />
        ))}
      </div>
    </>
  );
}

export default SelectBox;
