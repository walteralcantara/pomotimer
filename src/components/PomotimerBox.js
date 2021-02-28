import React from 'react';
import styles from '../styles/components/PomotimerBox.module.css';

export const PomotimerBox = () => {
  return (
    <div className={styles.pomoTimerBoxContainer}>
      <div className={styles.pomoTimerDisplay}>25:00</div>
      <button className={styles.pomoButton}>Iniciar</button>
    </div>
  );
};
