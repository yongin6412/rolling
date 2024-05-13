import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPaper } from "../../../services/api";
import styles from "./PaperPostForm.module.scss";
import SelectBox from "./SelectBox/SelectBox";
import PrimaryButton from "../../../components/UI/PrimaryButton";

function PaperPostForm() {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [backgroundSelection, setBackgroundSelection] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsError(value.trim() === "" ? true : false);
    setIsDisabled(value.trim() === "");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      name: inputValue,
      backgroundColor: backgroundSelection.backgroundColor,
      backgroundImageURL:
        backgroundtype === "image" ? backgroundSelection.imageURL : null,
    };

    const { id } = await postPaper(requestBody);
    navigate(`/post/${id}`);
  };

  const [backgroundtype, setBackgroundType] = useState("color");

  const handleSelectionChange = (selection) => {
    setBackgroundSelection(selection);
  };

  const handleSelectTypeChange = (backgroundType) => {
    setBackgroundType(backgroundType);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className={styles.postForm}>
        <div className={styles.inputBox}>
          <label htmlFor="sendingInput" className={styles.sendTo}>
            To.
          </label>
          <input
            type="text"
            id="sendingInput"
            placeholder="받는 사람 이름을 입력해주세요"
            value={inputValue}
            onChange={handleInputChange}
            className={styles.sendToInput}
          />
        </div>
        {isError && (
          <div className={styles.errorMessage}>값을 입력해주세요.</div>
        )}
        <div className={styles.textBox}>
          <h2 className={styles.title}>배경화면을 선택해 주세요.</h2>
          <p className={styles.subTitle}>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <div>
          <SelectBox
            type={backgroundtype}
            onSelectionChange={handleSelectionChange}
            onSelectTypeChange={handleSelectTypeChange}
          />
        </div>
        <PrimaryButton WidthMax={true} disable={isDisabled}>
          생성하기
        </PrimaryButton>
      </form>
    </div>
  );
}

export default PaperPostForm;
