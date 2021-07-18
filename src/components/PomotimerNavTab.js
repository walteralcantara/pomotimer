import React, { useContext } from 'react';
import cx from 'classnames';

import { CountdownContext } from '../context/CountdownContext';

import '../styles/components/PomotimerNavTab.scss';

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
    <nav>
      <ul>
        <li className={cx({ 'selected': isPomoSelected })}>
          <a href="#pomo" onClick={resetPomo}>
            Pomodoro
          </a>
        </li>

        <li className={cx({ 'selected': isShortBreakSelected })}>
          <a href="#short" onClick={pausePomo}>
            Pausa Curta
          </a>
        </li>

        <li className={cx({ 'selected': isLongBreakSelected })}>
          <a href="#long" onClick={longPausePomo}>
            Pausa Longa
          </a>
        </li>
      </ul>
    </nav>
  );
};
