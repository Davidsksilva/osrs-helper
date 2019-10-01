import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 40px 80px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Runescape';
    color: yellow;
    font-size: 4em;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  height: 60px;
  margin-top: 20px;

  input {
    flex: 1;
    border: 2px solid #212121;
    background-color: #333;
    color: #fff;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 24px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface SubmitButtonProps {
  loading: number;
}

export const SubmitButton = styled.button.attrs<SubmitButtonProps>(
  ({ loading }: SubmitButtonProps) => ({
    type: 'submit',
    disabled: loading,
    loading,
  })
)<SubmitButtonProps>`
  background-color: #212121;
  border: 0;
  padding: 0 20px;
  margin-left: 15px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 500ms linear;
  border: 2px solid #212121;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background-color: #333;
    border: 2px solid #212121;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
