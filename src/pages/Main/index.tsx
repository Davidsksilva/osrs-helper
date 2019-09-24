import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import axios from 'axios';

import { hiscoreUrl, proxyUrl } from '../../constants/urls';
import { Container, SearchContainer, SearchForm, SubmitButton } from './styles';

const Main = () => {
  const [username, setUsername] = useState<string | undefined>('');

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    fetchHiscore();
  }

  async function fetchHiscore() {
    const response = await axios.get(`${proxyUrl}${hiscoreUrl}`, {
      headers: {
        crossorigin: true,
      },
      params: {
        player: username,
      },
    });

    console.log(response.data);
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
