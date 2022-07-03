import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { surveyDefaultTemplate } from 'utils';
import { Wrapper } from './styles';

function MainPage() {
  const navigate = useNavigate();

  const onClickCreateButton = () => {
    const questions = surveyDefaultTemplate();
    axios
      .post('/api/surveys/', questions, { withCredentials: true })
      .then((response) => {
        navigate(`/surveys/${response.data.id}/share`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Wrapper>
      <button onClick={onClickCreateButton}>내 링크 생성하기</button>
      {/* <Link to={'/surveys/create'}>직접 만들러 가기</Link> */}
    </Wrapper>
  );
}

export default MainPage;
