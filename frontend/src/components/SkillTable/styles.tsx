import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #3e3529;
  padding: 4px;

  border-radius: 4px;
`;

export const GridItem = styled.div`
  font-size: 20px;
  text-align: center;
  color: yellow;
  background-color: #3e3529;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Runescape';
  display: flex;
  padding: 4px;
  height: 50px;
  width: 76px;
`;

export const Skill = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  width: 100%;

  height: 100%;
  justify-content: space-between;
  padding: 8px;
  background-color: #555;
  border-radius: 4px;
`;

export const Total = styled.div`
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  height: 100%;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
`;
