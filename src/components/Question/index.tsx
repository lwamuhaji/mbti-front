import React from 'react';
import { OptionWrapper, QuestionWrapper, Statement, DecisionWrapper, Caption } from './styles';

interface Props {
  children: React.ReactElement[];
  statement: string;
}

function Question({ children, statement }: Props) {
  return (
    <QuestionWrapper>
      <Statement>{statement}</Statement>
      <DecisionWrapper>
        <Caption>동의</Caption>
        <OptionWrapper>{children}</OptionWrapper>
        <Caption>비동의</Caption>
      </DecisionWrapper>
    </QuestionWrapper>
  );
}

export default Question;
