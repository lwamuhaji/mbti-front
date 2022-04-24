import TestLayout from 'layouts/TestLayout';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TestLayout />}></Route>
            <Route path="/test" element={<div>path=/test</div>}></Route>
            <Route path="*" element={<div>NotFound</div>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
