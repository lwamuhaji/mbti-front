import React from 'react';
import MainLayout from 'layouts/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, ModalStyle } from './styles';
import QuestionPage from 'pages/QuestionPage';
import CompletePage from 'pages/CompletePage';
import CreateSurveyPage from 'pages/CreateSurveyPage';
import SharePage from 'pages/SharePage';
import ResultPage from 'pages/ResultPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="" element={<MainPage />}></Route>
              <Route path="surveys/*">
                <Route path=":surveyId" element={<QuestionPage />}></Route>
                <Route path=":surveyId/complete" element={<CompletePage />}></Route>
                <Route path=":surveyId/share" element={<SharePage />}></Route>
                <Route path=":surveyId/result" element={<ResultPage />}></Route>
                <Route path="create" element={<CreateSurveyPage />}></Route>
              </Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
