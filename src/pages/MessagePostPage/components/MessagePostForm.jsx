import { useState } from "react";
import DropDownBox from "./DropDownBox/DropDownBox";
import styles from "./MessagePostForm.module.scss";

const INITIAL_VALUES = {
  recipientId: null,
  sender: "",
  profileImageURL: "",
  relationship: "",
  content: "",
  font: "",
};

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

function MessagePostForm() {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.form}>
        <div className={styles.sender}>
          <h2>From.</h2>
          <input
            name="sender"
            value={values.sender}
            onChange={handleInputChange}
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div className={styles.profileImg}>
          <h2>프로필 이미지</h2>
        </div>
        <div className={styles.relationship}>
          <h2>상대와의 관계</h2>
          <DropDownBox
            name="relationship"
            onChange={handleInputChange}
            options={RELATIONSHIP}
          />
        </div>
        <div className={styles.content}>
          <h2>내용을 입력해 주세요</h2>
        </div>
        <div className={styles.font}>
          <h2>폰트 선택</h2>
          <DropDownBox
            name="font"
            onChange={handleInputChange}
            options={FONT}
          />
        </div>
        <button type="submit">생성하기</button>
      </div>
    </form>
  );
}

export default MessagePostForm;
