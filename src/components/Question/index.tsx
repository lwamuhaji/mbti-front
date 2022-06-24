import React from 'react';
import { OptionWrapper, Wrapper, Statement, DecisionWrapper, Caption } from './styles';

interface Props {
  children: React.ReactElement[];
  statement: string;
}

function Question({ children, statement }: Props) {
  return (
    <Wrapper>
      <p>{statement}</p>
      <div>
        <p>동의</p>
        <div>{children}</div>
        <p>비동의</p>
      </div>
    </Wrapper>
  );
}

export default Question;
