import styled from 'styled-components';

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
  background-color: #261e15;
  align-items: center;

  h1 {
    font-family: 'Runescape';
    color: yellow;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  height: 60px;

  input {
    flex: 1;
    border: 1px solid #333;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 18px;
  }
`;
