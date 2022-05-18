import React from 'react';
import QuestionLayout from 'layouts/QuestionLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles';
import QuestionPage from 'pages/QuestionPage';
import CompletePage from 'pages/CompletePage';
import CreateSurveyPage from 'pages/CreateSurveyPage';
import SharePage from 'pages/SharePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>hi</div>}></Route>
            <Route path="surveys/*" element={<QuestionLayout />}>
              <Route path=":surveyId" element={<QuestionPage />}></Route>
              <Route path=":surveyId/complete" element={<CompletePage />}></Route>
              <Route path="create" element={<CreateSurveyPage />}></Route>
              <Route path="share" element={<SharePage />}></Route>
            </Route>
            <Route path="*" element={<h1>NotFound</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
