import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const { isDarkModActive } = useContext(ThemeContext);
  const dark = isDarkModActive ? styles.dark : '';
  const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

  return (
    <header className={`${styles.experienceBar} ${dark}`}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={`${styles.currentExperience} ${dark}`} style={{ left: `${percentToNextLevel}%` }}>
          <div className={`${styles.arrowExperience} ${dark}`}></div>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}