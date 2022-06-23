import React from 'react';
import MainLayout from 'layouts/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles';
import QuestionPage from 'pages/QuestionPage';
import CompletePage from 'pages/CompletePage';
import CreateSurveyPage from 'pages/CreateSurveyPage';
import SharePage from 'pages/SharePage';
import ResultPage from 'pages/ResultPage';
import MainPage from 'pages/MainPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="surveys/*" element={<MainLayout />}>
              <Route path=":surveyId" element={<QuestionPage />}></Route>
              <Route path=":surveyId/complete" element={<CompletePage />}></Route>
              <Route path=":surveyId/share" element={<SharePage />}></Route>
              <Route path=":surveyId/result" element={<ResultPage />}></Route>
              <Route path="create" element={<CreateSurveyPage />}></Route>
            </Route>
            <Route path="*" element={<h1>NotFound</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
