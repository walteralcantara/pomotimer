import { useContext } from 'react';
import styles from '../styles/components/PomotimerBox.module.css';

import { CountdownContext } from '../context/CountdownContext';

export const PomotimerBox = () => {
  const {
    minutes,
    seconds,
    isActive,
    startTimer,
    pauseTimer,
    round,
  } = useContext(CountdownContext);

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

      <p className={styles.roundDisplay}>Turno: {round}</p>
    </div>
  );
};
