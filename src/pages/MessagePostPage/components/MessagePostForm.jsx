import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DropDownBox from "./DropDownBox/DropDownBox";
import ProfileImage from "./ProfileImage/ProfileImage";
import ContentEditor from "./ContentEditor/ContentEditor";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import { postMessage } from "../../../services/api";
import styles from "./MessagePostForm.module.scss";

const RELATIONSHIP = ["친구", "지인", "동료", "가족"];
const FONT = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];
const INITIAL_VALUES = {
  sender: "",
  profileImageURL:
    "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
  relationship: "친구",
  content: "",
  font: "Noto Sans",
};

function MessagePostForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showError, setShowError] = useState(false);
  const { id } = useParams();
  const goToMyPaper = useNavigate();

  const handleInputChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    const { sender, content } = { ...values, [name]: value };
    setIsDisabled(
      !(sender && content && sender.trim() !== "" && content.trim() !== "")
    );
    setShowError(sender ? false : true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await postMessage(values, id);
    setValues(INITIAL_VALUES);
    goToMyPaper(`/post/${id}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div>
          <h2>From.</h2>
          <input
            name="sender"
            type="text"
            value={values.sender}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            placeholder="이름을 입력해주세요."
          />
          {showError && (
            <div className={styles.errorMessage}>값을 입력해주세요.</div>
          )}
        </div>
        <div>
          <h2>프로필 이미지</h2>
          <ProfileImage name="profileImageURL" onChange={handleInputChange} />
        </div>
        <div>
          <h2>상대와의 관계</h2>
          <DropDownBox
            name="relationship"
            onChange={handleInputChange}
            options={RELATIONSHIP}
          />
        </div>
        <div>
          <h2>내용을 입력해 주세요</h2>
          <ContentEditor name="content" onChange={handleInputChange} />
        </div>
        <div>
          <h2>폰트 선택</h2>
          <DropDownBox
            name="font"
            onChange={handleInputChange}
            options={FONT}
          />
        </div>
        <div className={styles.submitButton}>
          <PrimaryButton WidthMax={true} disable={isDisabled}>
            생성하기
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default MessagePostForm;
