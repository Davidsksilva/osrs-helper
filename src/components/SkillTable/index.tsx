import React from 'react';
import Loader from 'react-loader-spinner';
import { SkillEntry } from '../../interfaces/HiscoreEntry/types';

import { Container, GridItem, Total, Skill } from './styles';

interface Props {
  data: SkillEntry[];
  loading: boolean;
}
const SkillTable = ({ data, loading }: Props) => {
  const renderTable = () => {
    return data.length ? (
      <Container>
        {data.map(s => (
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
        ))}
      </Container>
    ) : (
      <></>
    );
  };

  return loading ? (
    <Loader type="ThreeDots" color="#fff" height={80} width={80} />
  ) : (
    renderTable()
  );
};

export default SkillTable;
