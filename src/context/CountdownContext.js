import React, { createContext, useEffect, useState } from 'react';

export const CountdownContext = createContext();

export function CountdownProvider({ children }) {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  let timeoutTimer;

  function startTimer() {
    setIsActive(true);
  }

  function pauseTimer() {
    setIsActive(false);
    setHasFinished(false);
    clearTimeout(timeoutTimer);
  }

  function resetPomo() {
    clearTimeout(timeoutTimer);
    setIsActive(false);
    setHasFinished(false);
    setTime(25 * 60);
  }

  function pausePomo() {
    alert('pausou');
  }

  function longPausePomo() {
    alert('pausou bastante');
  }

  useEffect(() => {
    if (isActive && time > 0) {
      timeoutTimer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
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
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
