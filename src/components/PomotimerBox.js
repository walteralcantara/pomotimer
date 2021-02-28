import React from 'react';
import styles from '../styles/components/PomotimerBox.module.css';

export const PomotimerBox = () => {
  const [time, setTime] = React.useState(0.05 * 60);
  const [isActive, setIsActive] = React.useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  let timer = 0;

  function startTimer() {
    setIsActive(true);
  }

  React.useEffect(() => {
    if (isActive && time > 0) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time]);

  function pauseTimer() {
    setIsActive(false);
    clearTimeout(timer);
  }

  return (
    <div className={styles.pomoTimerBoxContainer}>
      <div className={styles.pomoTimerDisplay}>
        {minutes < 10 ? `${'0' + minutes}` : minutes}:
        {seconds < 10 ? `${'0' + seconds}` : seconds}
      </div>

      {isActive === false && (
        <button onClick={startTimer} className={styles.pomoButton}>
          Iniciar
        </button>
      )}

      {isActive === true && (
        <button onClick={pauseTimer} className={styles.pomoButton}>
          Pausar
        </button>
      )}
    </div>
  );
};
