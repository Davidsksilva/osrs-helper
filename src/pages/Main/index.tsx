import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Container, SearchContainer, SearchForm, SubmitButton } from './styles';

const Main = () => {
  const [username, setUsername] = useState<string | undefined>('');

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container>
      <SearchContainer>
        <h1>OSRS Helper</h1>

        <SearchForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="OSRS Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <SubmitButton>
            <FaSearch color="#fff" size={16} />
          </SubmitButton>
        </SearchForm>
      </SearchContainer>
    </Container>
  );
};

export default Main;
