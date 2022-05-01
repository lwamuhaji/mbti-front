import React from 'react';
import QuestionLayout from 'layouts/QuestionLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles';
import QuestionPage from 'pages/QuestionPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>hi</div>}></Route>
            <Route path="question/*" element={<QuestionLayout />}>
              <Route path=":id" element={<QuestionPage />}></Route>
            </Route>
            <Route path="*" element={<div>NotFound</div>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
