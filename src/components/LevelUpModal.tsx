import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  const { isDarkModActive } = useContext(ThemeContext);
  const dark = isDarkModActive ? styles.dark : '';

  return (
    <div className={`${styles.overlay} ${dark}`}>
      <div className={`${styles.container} ${dark}`}>
        <header>{ level }</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  )
}