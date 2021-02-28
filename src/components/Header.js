import React from 'react';
import styles from '../styles/components/Header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={styles.logo} href="index.html">
        <a href="index.html">
          Pomo<span>.react</span>
        </a>
      </div>
    </header>
  );
};
