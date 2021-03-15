import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const {level} = useContext(ChallengesContext);
  const { isDarkModActive } = useContext(ThemeContext);
  const dark = isDarkModActive ? styles.dark : '';
  return (
    <div className={`${styles.profileContainer} ${dark}`}>
      <img src="https://image.shutterstock.com/image-vector/profile-photo-vector-placeholder-pic-600w-535853263.jpg" alt="Eric Rocha" />
      <div>
        <strong>User</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}