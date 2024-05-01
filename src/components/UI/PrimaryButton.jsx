import styled from "styled-components";

const Button = styled.button`
  width: 208px;
  height: 56px;
  background-color: var(--purple-600);
  border-radius: 12px;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 700;
  color: var(--white);

  &:hover {
    background: var(--purple-700);
  }

  &:focus {
    background: var(--purple-900);
    border: 2px solid #5603a7;
  }

  &:disabled {
    background: var(--grey-300);
  }

  &:pressed {
    background: var(--purple-800);
  }
`;

function PrimaryButton({ text }) {
  return <Button type="submit">{text}</Button>;
}

export default PrimaryButton;
