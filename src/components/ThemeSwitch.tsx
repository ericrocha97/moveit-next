import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import Switch from 'react-switch';

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
    switchTheme(!isDark)
  }

  return (
    <div >
      <Switch
        onChange={darkActive}
        checked={isDark}
        checkedIcon={false}
        uncheckedIcon={false}
        height={16}
        width={50}
        onHandleColor="#252627"
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 10px rgba(0, 0, 0, 0.6)"
        handleDiameter={25}
        offColor="#252627"
        onColor="#f2f3f5"
      />
    </div>
  )
}
