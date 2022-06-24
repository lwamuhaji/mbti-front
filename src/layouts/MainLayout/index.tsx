import React from 'react';
import { Wrapper } from './styles';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <Wrapper>
      <header>
        <h1>
          <span className="friend">친구</span>
          <span className="see">가 보는 </span>
          <span className="me">나</span>.
        </h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2022. lwamuhaji all rights reserved.</p>
        <p>Contact: lwamuhaji@gmail.com</p>
      </footer>
    </Wrapper>
  );
}

export default MainLayout;
