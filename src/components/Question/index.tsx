import React from 'react';
import { OptionWrapper, Option, QuestionWrapper, Statement, DecisionWrapper, Caption } from './styles';

interface Props {
  statement: string;
  onClickOption: (option_id: number) => void;
}

function Question({ statement, onClickOption }: Props) {
  return (
    <QuestionWrapper>
      <Statement>{statement}</Statement>
      <DecisionWrapper>
        <Caption>동의</Caption>
        <OptionWrapper>
          <Option
            className="max agree"
            onClick={() => {
              onClickOption(0);
            }}
          ></Option>
          <Option
            className="mid agree"
            onClick={() => {
              onClickOption(1);
            }}
          ></Option>
          <Option
            className="min agree"
            onClick={() => {
              onClickOption(2);
            }}
          ></Option>
          <Option
            className="neutral"
            onClick={() => {
              onClickOption(3);
            }}
          ></Option>
          <Option
            className="min disagree"
            onClick={() => {
              onClickOption(4);
            }}
          ></Option>
          <Option
            className="mid disagree"
            onClick={() => {
              onClickOption(5);
            }}
          ></Option>
          <Option
            className="max disagree"
            onClick={() => {
              onClickOption(6);
            }}
          ></Option>
        </OptionWrapper>
        <Caption>비동의</Caption>
      </DecisionWrapper>
    </QuestionWrapper>
  );
}

export default Question;
