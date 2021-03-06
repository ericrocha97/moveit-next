  
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  const { isDarkModActive } = useContext(ThemeContext);
  const dark = isDarkModActive ? styles.dark : '';

  return (
    <div className={`${styles.completedChallengesContainer} ${dark}`}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}