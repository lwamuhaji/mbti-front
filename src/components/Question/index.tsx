import React from 'react';
import { IAnswers, IQuestion } from 'types/db';
import { Wrapper } from './styles';

interface Props {
  question: IQuestion;
  answers: IAnswers;
  onClickOption: (question_id: number, option_id: number) => void;
}

function Question({ question, answers, onClickOption }: Props) {
  return (
    <Wrapper className="questions-wrapper">
      <p>{question.statement}</p>
      <span className="agree">YES</span>
      <button
        className={`option max agree    ${answers[question.id] === 1 ? 'checked' : ''}`}
        onClick={() => onClickOption(question.id, 1)}
      />
      <button
        className={`option mid agree    ${answers[question.id] === 2 ? 'checked' : ''}`}
        onClick={() => onClickOption(question.id, 2)}
      />
      <button
        className={`option min agree    ${answers[question.id] === 3 ? 'checked' : ''}`}
        onClick={() => onClickOption(question.id, 3)}
      />
      <button
        className={`option min disagree ${answers[question.id] === 4 ? 'checked' : ''}`}
        onClick={() => onClickOption(question.id, 4)}
      />
      <button
        className={`option mid disagree ${answers[question.id] === 5 ? 'checked' : ''}`}
        onClick={() => onClickOption(question.id, 5)}
      />
      <button
        className={`option max disagree ${answers[question.id] === 6 ? 'checked' : ''}`}
        onClick={() => onClickOption(question.id, 6)}
      />
      <span className="disagree">NO</span>
    </Wrapper>
  );
}

export default Question;
