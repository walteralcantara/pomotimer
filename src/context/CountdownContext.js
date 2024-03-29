import React, { createContext, useEffect, useState } from 'react';

export const CountdownContext = createContext();

export function CountdownProvider({ children }) {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [round, setRound] = useState(0);

  const [isPomoSelected, setIsPomoSelected] = useState(true);
  const [isShortBreakSelected, setIsShortBreakSelected] = useState(false);
  const [isLongBreakSelected, setIsLongBreakSelected] = useState(false);

  const audioBtn = new Audio('/media/audioBtnClicked.mp3');
  const audioAlarm = new Audio('./media/audioAlarmClock.mp3');

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  let timeoutTimer;

  function startTimer() {
    audioBtn.play();
    setIsActive(true);
  }

  function pauseTimer() {
    audioBtn.play();
    setIsActive(false);
    clearTimeout(timeoutTimer);
  }

  function resetPomo() {
    clearTimeout(timeoutTimer);
    setIsActive(false);
    setTime(25 * 60);

    setIsPomoSelected(true);
    setIsShortBreakSelected(false);
    setIsLongBreakSelected(false);
  }

  function pausePomo() {
    clearTimeout(timeoutTimer);
    setIsActive(false);
    setTime(5 * 60);

    setIsPomoSelected(false);
    setIsShortBreakSelected(true);
    setIsLongBreakSelected(false);
  }

  function longPausePomo() {
    clearTimeout(timeoutTimer);
    setIsActive(false);
    setTime(15 * 60);

    setIsPomoSelected(false);
    setIsShortBreakSelected(false);
    setIsLongBreakSelected(true);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      timeoutTimer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      audioAlarm.play();
    }

    if (time === 0 && isPomoSelected && round < 4) {
      setRound(round + 1);
      pausePomo();
    }

    if (time > 0 && round === 4) {
      setRound(0);
      longPausePomo();
    }

    if (time === 0 && isShortBreakSelected) {
      resetPomo();
    }

    if (time === 0 && isLongBreakSelected) {
      resetPomo();
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
        isPomoSelected,
        isShortBreakSelected,
        isLongBreakSelected,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
