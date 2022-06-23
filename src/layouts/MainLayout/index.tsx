import React from 'react';
import { Footer, Header } from './styles';
import { Outlet } from 'react-router-dom';

function TestLayout() {
  return (
    <>
      <Header>
        <h1>친구가 보는 나.</h1>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer>
        <p>© 2022. lwamuhaji all rights reserved.</p>
        <p>Contact: lwamuhaji@gmail.com</p>
      </Footer>
    </>
  );
}

export default TestLayout;
