import React, { useState } from 'react';

import { Container, SearchContainer, SearchForm } from './styles';

const Main = () => {
  const [username, setUsername] = useState<string | undefined>('');

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  return (
    <Container>
      <SearchContainer>
        <h1>OSRS Helper</h1>

        <SearchForm>
          <input
            type="text"
            placeholder="OSRS Account"
            value={username}
            onChange={handleUsernameChange}
          />
        </SearchForm>
      </SearchContainer>
    </Container>
  );
};

export default Main;
