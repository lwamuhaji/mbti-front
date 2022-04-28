import React from 'react';
import { OptionWrapper, Option, QuestionWrapper, Statement, DecisionWrapper, Caption } from './styles';

function Question() {
  return (
    <QuestionWrapper>
      <Statement>종종 다른 사람들에게 자신을 정당화시켜야 할 것만 같은 기분이 듭니다.</Statement>
      <DecisionWrapper>
        <Caption>동의</Caption>
        <OptionWrapper>
          <Option size={60}></Option>
          <Option size={50}></Option>
          <Option size={40}></Option>
          <Option size={30}></Option>
          <Option size={40}></Option>
          <Option size={50}></Option>
          <Option size={60}></Option>
        </OptionWrapper>
        <Caption>비동의</Caption>
      </DecisionWrapper>
    </QuestionWrapper>
  );
}

export default Question;
