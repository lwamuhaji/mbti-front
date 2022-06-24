import React from 'react';
import { IQuestion } from 'types/db';
import { Wrapper } from './styles';
import { MdDelete } from 'react-icons/md';
import { relative } from 'path';

interface Props {
  question: IQuestion;
  onChangeStatement: React.ChangeEventHandler<HTMLInputElement>;
  onClickDeleteButton: () => void;
}

function CreatedQuestion({ question, onClickDeleteButton, onChangeStatement }: Props) {
  return (
    <Wrapper>
      <input value={question.statement} onChange={onChangeStatement} />
      <MdDelete size={24} color="gray" onClick={onClickDeleteButton} />
    </Wrapper>
  );
}

export default CreatedQuestion;
