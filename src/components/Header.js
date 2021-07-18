import React from 'react';
import '../styles/components/Header.scss';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          Pomo<span>.react</span>
        </a>
      </div>
    </header>
  );
};
