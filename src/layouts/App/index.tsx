import React from 'react';
import QuestionLayout from 'layouts/QuestionLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles';
import QuestionPage from 'pages/QuestionPage';
import CompletePage from 'pages/CompletePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>hi</div>}></Route>
            <Route path="test/*" element={<QuestionLayout />}>
              <Route path=":id" element={<QuestionPage />}></Route>
              <Route path=":id/share" element={<CompletePage />}></Route>
            </Route>
            <Route path="*" element={<h1>NotFound</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
