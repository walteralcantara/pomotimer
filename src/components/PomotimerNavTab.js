import React, { useState, useContext } from 'react';
import styles from '../styles/components/PomotimerNavTab.module.css';

import { CountdownContext } from '../context/CountdownContext';

export const PomotimerNavTab = () => {
  const {
    resetPomo,
    pausePomo,
    longPausePomo,
    isPomoSelected,
    isShortBreakSelected,
    isLongBreakSelected,
  } = useContext(CountdownContext);

  return (
    <nav className={styles.pomoTimerNavTabContainer}>
      <ul className={styles.pomoTimerNavBox}>
        <li className={isPomoSelected ? `${styles.selected}` : null}>
          <a onClick={resetPomo} href="#">
            Pomodoro
          </a>
        </li>
        <li className={isShortBreakSelected ? `${styles.selected}` : null}>
          <a onClick={pausePomo} href="#">
            Breve Pausa
          </a>
        </li>
        <li className={isLongBreakSelected ? `${styles.selected}` : null}>
          <a onClick={longPausePomo} href="#">
            Longa Pausa
          </a>
        </li>
      </ul>
    </nav>
  );
};
