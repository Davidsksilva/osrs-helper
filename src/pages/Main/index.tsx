import React, { useState } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

import axios from 'axios';

import { hiscoreUrl, proxyUrl } from '../../constants/urls';
import { Container, SearchContainer, SearchForm, SubmitButton } from './styles';
import { skills, activities } from '../../constants/experienceLabels';
import { ActivityEntry, SkillEntry } from './types';

const Main = () => {
  const [username, setUsername] = useState<string | undefined>('');
  const [loading, setLoading] = useState<boolean>(false);

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);
      await fetchHiscore();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
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
    processHiscore(formatedData);
  }

  function processHiscore(formattedData: string[]) {
    const skillsHiscore: SkillEntry[] = skills.map((h, index) => {
      const splitted: string[] = formattedData[index].split(',');
      return {
        name: h,
        rank: parseInt(splitted[0]),
        level: parseInt(splitted[1]),
        xp: parseInt(splitted[2]),
      };
    });

    const activitiesHiscore: ActivityEntry[] = activities.map((h, i) => {
      const index = i + skills.length;
      const splitted: string[] = formattedData[index].split(',');

      return {
        name: h,
        rank: parseInt(splitted[0]),
        score: parseInt(splitted[1]),
      };
    });

    console.log([...skillsHiscore, ...activitiesHiscore]);
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
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#fff" size={16} />
            ) : (
              <FaSearch color="#fff" size={16} />
            )}
          </SubmitButton>
        </SearchForm>
      </SearchContainer>
    </Container>
  );
};

export default Main;
