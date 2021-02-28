import React from 'react';
import styles from '../styles/components/PomotimerNavTab.module.css';

export const PomotimerNavTab = () => {
  return (
    <nav className={styles.pomoTimerNavTabContainer}>
      <ul className={styles.pomoTimerNavBox}>
        <li>
          <a href="#">Pomodoro</a>
        </li>
        <li>
          <a href="#">Breve Pausa</a>
        </li>
        <li>
          <a href="#">Longa Pausa</a>
        </li>
      </ul>
    </nav>
  );
};
