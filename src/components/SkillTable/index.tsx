import React from 'react';

import { SkillEntry } from '../../interfaces/HiscoreEntry/types';

import { Container, GridItem, Total, Skill } from './styles';

interface Props {
  data: SkillEntry[];
}
const SkillTable = ({ data }: Props) => {
  const renderSkillItem = () => {
    return data.map(s => (
      <GridItem key={s.name}>
        {s.name !== 'Overall' ? (
          <>
            <Skill>
              <img src={`/images/${s.name}_icon.png`} alt={s.name} />
              {s.level}
            </Skill>
          </>
        ) : (
          <Total>{s.level}</Total>
        )}
      </GridItem>
    ));
  };
  return data.length ? <Container>{renderSkillItem()}</Container> : <></>;
};

export default SkillTable;
