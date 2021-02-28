import React, { useState, useContext } from 'react';
import styles from '../styles/components/PomotimerNavTab.module.css';

import { CountdownContext } from '../context/CountdownContext';

export const PomotimerNavTab = () => {
  const {
    time,
    setTime,
    minutes,
    seconds,
    isActive,
    setIsActive,
    startTimer,
    pauseTimer,
    resetPomo,
    pausePomo,
    longPausePomo,
  } = useContext(CountdownContext);

  return (
    <nav className={styles.pomoTimerNavTabContainer}>
      <ul className={styles.pomoTimerNavBox}>
        <li>
          <a onClick={resetPomo} href="#">
            Pomodoro
          </a>
        </li>
        <li>
          <a onClick={pausePomo} href="#">
            Breve Pausa
          </a>
        </li>
        <li>
          <a onClick={longPausePomo} href="#">
            Longa Pausa
          </a>
        </li>
      </ul>
    </nav>
  );
};
