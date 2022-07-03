import React from 'react';
import { Bar, InnerBar, Wrapper } from './style';

interface Props {
  score: number;
  type: [string, string];
}

function ResultBar({ score, type }: Props) {
  return (
    <Wrapper>
      <span>{type[0]}</span>
      <Bar>
        <InnerBar percentage={Math.abs((score / 9) * 100)} reverse={score < 0} />
      </Bar>
      <span>{type[1]}</span>
    </Wrapper>
  );
}

export default ResultBar;
