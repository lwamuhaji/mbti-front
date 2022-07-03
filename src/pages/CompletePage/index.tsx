import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './styles';

function CompletePage() {
  const navigate = useNavigate();

  const onClickCreateSurveyButton = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <div>결과가 친구에게 전달되었습니다.</div>
      <button onClick={onClickCreateSurveyButton}>내 문제 만들러 가기</button>
    </Wrapper>
  );
}

export default CompletePage;
