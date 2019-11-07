import React from 'react';

import { SkillEntry } from '../../interfaces/HiscoreEntry/types';

import { Container, SkillItem } from './styles';

interface Props {
  data: SkillEntry[];
}
const SkillTable = ({ data }: Props) => {
  const renderSkillItem = () => {
    return data.map(s => <SkillItem key={s.name}>{s.name}</SkillItem>);
  };
  return data.length ? <Container>{renderSkillItem()}</Container> : <></>;
};

export default SkillTable;
