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

    const formatedData: string[] = response.data.split(/\r?\n/);
    console.log(formatedData);
    return formatedData;
  }

  interface HiscoreEntry {
    name: string;
    level: number;
    xp: number;
    rank: number;
  }

  interface HiscoreXp {
    level: number;
    xp: number;
    rank: number;
  }

  async function processHiscore() {
    const rawHiscore: string[] = await fetchHiscore();
    const hiscores: HiscoreXp[] = rawHiscore.map(h => {
      const splitted: string[] = h.split(',');
      return {
        rank: parseInt(splitted[0]),
        level: parseInt(splitted[1]),
        xp: parseInt(splitted[2]),
      };
    });
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
