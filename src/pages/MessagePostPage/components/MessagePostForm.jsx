import { useEffect, useState } from "react";
import DropDownBox from "./DropDownBox/DropDownBox";
import ProfileImage from "./ProfileImage/ProfileImage";
import ContentEditor from "./ContentEditor/ContentEditor";
import PrimaryButton from "../../../components/UI/PrimaryButton";
import styles from "./MessagePostForm.module.scss";

const RELATIONSHIP = [
  { id: 1, value: "친구" },
  { id: 2, value: "지인" },
  { id: 3, value: "동료" },
  { id: 4, value: "가족" },
];

const FONT = [
  { id: 1, value: "Noto Sans" },
  { id: 2, value: "Pretendard" },
  { id: 3, value: "나눔명조" },
  { id: 4, value: "나눔손글씨 손편지체" },
];

const INITIAL_VALUES = {
  recipientId: null,
  sender: "",
  profileImageURL: "",
  relationship: RELATIONSHIP[0].value,
  content: "",
  font: FONT[0].value,
};

function MessagePostForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showError, setShowError] = useState("none");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    const { sender, content } = { ...values, [name]: value };
    setIsDisabled(
      !(sender && content && sender.trim() !== "" && content.trim() !== "")
    );

    if (!sender) {
      setShowError("block");
    } else {
      setShowError("none");
    }
  };

  const handleValueChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div>
          <h2>From.</h2>
          <input
            name="sender"
            type="text"
            value={values.sender}
            onChange={handleInputChange}
            placeholder="이름을 입력해주세요."
          />
          <div
            style={{ display: `${showError}` }}
            className={styles.errorMessage}
          >
            값을 입력해주세요.
          </div>
        </div>
        <div>
          <h2>프로필 이미지</h2>
          <ProfileImage name="profileImageURL" onChange={handleValueChange} />
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
          <ContentEditor name="content" onChange={handleValueChange} />
        </div>
        <div>
          <h2>폰트 선택</h2>
          <DropDownBox
            name="font"
            onChange={handleInputChange}
            options={FONT}
          />
        </div>
        <div>
          <PrimaryButton disable={isDisabled}>생성하기</PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default MessagePostForm;
