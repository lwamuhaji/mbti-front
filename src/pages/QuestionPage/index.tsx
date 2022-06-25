import React, { useEffect, useState } from 'react';
import Question from 'components/Question';
import { Wrapper } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getSurvey } from 'apis';
import { IAnswers, ISurveyResponse, ISurvey } from 'types/db';
import axios from 'axios';
import { convertToDateFormat } from 'utils';
import Modal from 'react-modal';

function QuestionPage() {
  const { surveyId } = useParams();
  const navigate = useNavigate();
  const {
    isLoading: isSurveyLoading,
    isError: isSurveyError,
    data: surveyData,
    error: surveyError,
  } = useQuery<ISurvey | ISurveyResponse, Error>(['surveys', surveyId], getSurvey, {
    refetchOnWindowFocus: false,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [answers, setAnswers] = useState<IAnswers>({});

  useEffect(() => {
    if (surveyData && isIResponses(surveyData)) {
      navigate('share');
    }
  }, [surveyData, navigate]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClickOption = (question_id: number, option_id: number) => {
    setAnswers({ ...answers, [question_id]: option_id });
  };

  const isISurvey = (arg: any): arg is ISurvey => {
    return 'questions' in arg;
  };

  const isIResponses = (arg: any): arg is ISurveyResponse => {
    return 'responses' in arg;
  };

  const onClickCompleteButton = () => {
    openModal();
    if (isISurvey(surveyData) && Object.keys(answers).length !== surveyData?.questions.length) {
      alert('답변을 완료해주세요!');
      return;
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const answerer = ((e.target as HTMLFormElement).children[2] as HTMLInputElement).value;
    const date = convertToDateFormat(new Date());
    axios
      .post(`/api/surveys/${surveyId}/answersheets`, { answerer, date, answers }, { withCredentials: true })
      .then((response) => {
        navigate('complete');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isSurveyLoading) return <div>Loading</div>;

  if (isSurveyError) return <div>{surveyError.message}</div>;

  if (!isIResponses(surveyData) && isISurvey(surveyData)) {
    return (
      <Wrapper>
        {surveyData?.questions.map((question) => (
          <Question key={question.id} question={question} answers={answers} onClickOption={onClickOption} />
        ))}
        <button className="complete-button" onClick={onClickCompleteButton}>
          끝
        </button>
        <Modal
          appElement={document.getElementById('root') || undefined}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName={'overlay'}
        >
          <form onSubmit={onSubmit}>
            <span>별명을 입력해주세요!</span>
            <br />
            <input type="text" />
            <input type="submit" value="완료" />
          </form>
        </Modal>
      </Wrapper>
    );
  }

  return <div>Loading</div>;
}

export default QuestionPage;
