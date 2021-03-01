import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import { faSun, faMoon  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '../styles/components/ThemeSwitch.module.css';

export function ThemeSwitch() {
  const { isDarkModActive, switchTheme } = useContext(ThemeContext);
  const dark = isDarkModActive ? styles.dark : '';
  const [isDark, setDark] = useState(false);
 
  useEffect(()=>{
    setDark(JSON.parse(localStorage.getItem('darkTheme')) || false)
    switchTheme(isDark)
  }, [])

  useEffect(()=>{
    localStorage.setItem('darkTheme', JSON.stringify(isDark))
    switchTheme(isDark)
  }, [isDark])
  function darkActive() { 
    setDark(!isDark)
    switchTheme(isDark)
  }

  return (
    <div >
      <button 
        className={`${styles.switch} ${dark}`}
        onClick={ () => darkActive()}
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
