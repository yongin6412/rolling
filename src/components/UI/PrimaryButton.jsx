import styles from "./Button.module.scss";

// 자주 사용하는 크기 관련 스타일 변수 설정
const Size = {
  sm: styles.Small,
  md: styles.Medium,
  lg: styles.Large,
};

/* 버튼 속성에 각각에 해당되는 키를 입력하면 스타일 적용
ex) size{"md"}
설정 안할시 프라이멀 미디엄 버튼으로 적용된다*/
function PrimaryButton({
  size = "md",
  type = "submit",
  disable = false,
  WidthMax = false,
  children,
}) {
  const boxSize = Size[size];
  const fullWidth = WidthMax ? styles.fullWidth : "";

  return (
    <button
      className={`${styles.button} ${boxSize} ${fullWidth}`}
      type={type}
      disabled={disable}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
