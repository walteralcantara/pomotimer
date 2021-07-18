import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { CountdownContext } from '../context/CountdownContext';

import { formatMinutes } from '../utils/formatMinutes';
import { formatSeconds } from '../utils/formatSeconds';

import '../styles/components/PomotimerBox.scss';

export const PomotimerBox = () => {
  const {
    minutes,
    seconds,
    isActive,
    startTimer,
    pauseTimer,
    round,
    isPomoSelected
  } = useContext(CountdownContext);

  return (
    <>
      <Helmet>
        <title>
          {` ${formatMinutes(minutes)}:${formatSeconds(seconds)}
           -  ${isPomoSelected ? `Pomo` : `Pausa`}`}
        </title>
      </Helmet>

      <section>
        <h1>
          {formatMinutes(minutes)}
          :
          {formatSeconds(seconds)}
        </h1>

        {isActive ? (
          <button onClick={pauseTimer}>
            Pausar
          </button>
        ) : (
          <button onClick={startTimer}>
            Iniciar
          </button>
        )}

        <p>Turno: {round}</p>
      </section>
    </>
  );
};
