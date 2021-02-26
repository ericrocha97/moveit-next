import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import { faSun, faMoon  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '../styles/components/ThemeSwitch.module.css';

export function ThemeSwitch() {
  const { isDarkModActive, switchTheme } = useContext(ThemeContext);
  const dark = isDarkModActive ? styles.dark : '';
  return (
    <div >
      <button 
        className={`${styles.switch} ${dark}`}
        onClick={ () => switchTheme()}
      >
        {isDarkModActive ? (
          <FontAwesomeIcon icon={faSun} />
        ) : ( 
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </div>
  )
}
