import React, { createContext, useEffect, useState } from 'react';

export const CountdownContext = createContext();

export function CountdownProvider({ children }) {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [round, setRound] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  let timeoutTimer;

  function startTimer() {
    setIsActive(true);
  }

  function pauseTimer() {
    setIsActive(false);
    clearTimeout(timeoutTimer);
  }

  function resetPomo() {
    clearTimeout(timeoutTimer);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  function pausePomo() {
    setTime(5 * 60);
  }

  function longPausePomo() {
    setTime(15 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      timeoutTimer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      setRound(round + 1);
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        time,
        setTime,
        minutes,
        seconds,
        isActive,
        setIsActive,
        startTimer,
        pauseTimer,
        timeoutTimer,
        resetPomo,
        pausePomo,
        longPausePomo,
        round,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
