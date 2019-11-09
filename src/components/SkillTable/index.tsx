import React from 'react';

import { SkillEntry } from '../../interfaces/HiscoreEntry/types';

import { Container, SkillItem } from './styles';
import image from '../../assets/attack_icon.png';

interface Props {
  data: SkillEntry[];
}
const SkillTable = ({ data }: Props) => {
  const renderSkillItem = () => {
    return data.map(s => (
      <SkillItem key={s.name}>
        {s.name !== 'Overall' ? (
          <img src={`/images/${s.name}_icon.png`} alt={s.name} />
        ) : (
          <></>
        )}
      </SkillItem>
    ));
  };
  return data.length ? <Container>{renderSkillItem()}</Container> : <></>;
};

export default SkillTable;
