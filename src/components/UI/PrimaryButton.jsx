import styled from "styled-components";

const Button = styled.button`
  width: 208px;
  height: 56px;
  background-color: #9935FF;
  border-radius: 12px;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;

  &:hover {
    background-color: #861DEE;
  }

  &:focus {
    background-color: #6E0AD1;
    border: 2px solid #5603A7;
  }

  &:disabled {
    background-color: background: #CCCCCC;
  }

  &:pressed {
    background-color: #6E0AD1;
  }
`;

function PrimaryButton({ text }) {
  return <Button type="submit">{text}</Button>;
}

export default PrimaryButton;
