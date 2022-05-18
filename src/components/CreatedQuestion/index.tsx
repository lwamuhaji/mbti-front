import React from 'react';
import { IQuestion } from 'types/db';
import { Wrapper } from './styles';

interface Props {
  question: IQuestion;
  onChangeStatement: React.ChangeEventHandler<HTMLInputElement>;
  onClickDeleteButton: () => void;
}

function CreatedQuestion({ question, onClickDeleteButton, onChangeStatement }: Props) {
  return (
    <Wrapper>
      <input value={question.statement} onChange={onChangeStatement} />
      <button onClick={onClickDeleteButton}>삭제하기</button>
    </Wrapper>
  );
}

export default CreatedQuestion;
