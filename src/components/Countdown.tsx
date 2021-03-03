import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { faPlay, faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '../styles/components/Countdown.module.css';
import { ThemeContext } from '../contexts/ThemeContext';

export function Countdown() {
  
  const {
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown,
  } = useContext(CountdownContext);

  const { isDarkModActive } = useContext(ThemeContext);
  const dark = isDarkModActive ? styles.dark : '';

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={`${styles.countdownContainer} ${dark}`}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

        {hasFinished ? (
            <button 
                disabled
                className={`${styles.countdownButton} ${dark}`}
            >
                Ciclo encerrado <FontAwesomeIcon style={{marginLeft: 8, fontSize: 20, color:'4CD62B' }} icon={faCheckCircle} />
            </button>
        ) : (
            <>
                { isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive} ${dark}`}
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo <FontAwesomeIcon style={{marginLeft: 8, fontSize: 20}} icon={faTimes} />
                    </button>
                ) : (
                    <button 
                        type="button" 
                        className={`${styles.countdownButton} ${dark}`}
                        onClick={startCountdown}
                    >
                        Iniciar um ciclo  <FontAwesomeIcon style={{marginLeft: 8, fontSize: 20}} icon={faPlay} />
                    </button>
                ) }
            </>
        )}
 
    </div>
  )
}