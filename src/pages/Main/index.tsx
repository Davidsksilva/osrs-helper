import React, { useState } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

import axios from 'axios';

import { hiscoreUrl, proxyUrl } from '../../constants/urls';
import {
  Container,
  SearchContainer,
  SearchForm,
  SubmitButton,
  Content,
} from './styles';
import {
  skills,
  activities,
  skillsOrder,
} from '../../constants/experienceLabels';
import { ActivityEntry, SkillEntry } from '../../interfaces/HiscoreEntry/types';
import SkillTable from '../../components/SkillTable';

const Main = () => {
  const [username, setUsername] = useState<string | undefined>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [skillsHiscore, setSkillsHistore] = useState<SkillEntry[]>([]);
  const [activitiesHiscore, setActivitiesHiscore] = useState<ActivityEntry[]>(
    []
  );

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    await fetchHiscore();
  }

  async function fetchHiscore() {
    setLoading(true);
    const response = await axios.get(`${proxyUrl}${hiscoreUrl}`, {
      params: {
        player: username,
      },
    });

    const formatedData: string[] = response.data.split(/\r?\n/);
    processHiscore(formatedData);
    setLoading(false);
  }

  function processHiscore(formattedData: string[]) {
    const skillsH: SkillEntry[] = skills.map((h, index) => {
      const splitted: string[] = formattedData[index].split(',');
      return {
        name: h,
        rank: parseInt(splitted[0]),
        level: parseInt(splitted[1]),
        xp: parseInt(splitted[2]),
        index: skillsOrder[index],
      };
    });
    console.log(skillsH);
    skillsH.sort((a, b) => a.index - b.index);
    console.log(skillsH);

    const activitiesH: ActivityEntry[] = activities.map((h, i) => {
      const index = i + skills.length;
      const splitted: string[] = formattedData[index].split(',');

      return {
        name: h,
        rank: parseInt(splitted[0]),
        score: parseInt(splitted[1]),
      };
    });

    setSkillsHistore(skillsH);
    setActivitiesHiscore(activitiesH);
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
      <Content>
        <SkillTable data={skillsHiscore} />
      </Content>
    </Container>
  );
};

export default Main;
