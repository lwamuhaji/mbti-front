import React, { useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Wrapper } from './styles';

function SharePage() {
  const { surveyId } = useParams();
  const navigate = useNavigate();

  const copyLinkToClipboard = async () => {
    const link: string = window.location.host + `/surveys/${surveyId}`;
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(link);
    } else {
      return document.execCommand('copy', true, link);
    }
  };

  const navigateToResultPage = () => {
    navigate(`/surveys/${surveyId}/result`);
  };

  return (
    <Wrapper>
      <p>질문지가 만들어졌습니다!</p>
      <p>아래 링크를 공유해주세요.</p>
      <div>
        <Link to={`/surveys/${surveyId}`}>{window.location.host + `/surveys/${surveyId}`}</Link>
        <br />~{/* <button onClick={copyLinkToClipboard}>링크 복사하기</button> */}
        <button onClick={navigateToResultPage}>결과보러가기</button>
      </div>
    </Wrapper>
  );
}

export default SharePage;
