import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import { faPlay, faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  
  const {
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
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
                className={styles.countdownButton}
            >
                Ciclo encerrado <FontAwesomeIcon style={{marginLeft: 8, fontSize: 16, color:'4CD62B' }} icon={faCheckCircle} />
            </button>
        ) : (
            <>
                { isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo <FontAwesomeIcon style={{marginLeft: 8, fontSize: 16}} icon={faTimes} />
                    </button>
                ) : (
                    <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                    >
                        Iniciar um ciclo  <FontAwesomeIcon style={{marginLeft: 8, fontSize: 16}} icon={faPlay} />
                    </button>
                ) }
            </>
        )}
 
    </div>
  )
}