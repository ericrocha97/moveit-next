import { useContext } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { ExperienceBar } from '../components/ExperienceBar'
import { ChallengeBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider, ChallengesContext } from '../contexts/ChallengesContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { SideBar } from '../components/SideBar'
import GlobalStyledLight from '../styles/GlobalLight';
import GlobalStyledDark from '../styles/GlobalDark';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { isDarkModActive } = useContext(ThemeContext);
  const dark = isDarkModActive ? styles.dark : '';
  
  return (
    <>
    {
      isDarkModActive ? (
        <GlobalStyledDark />
      )
      :
      (
        <GlobalStyledLight />
      )
    }
    
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
    >   
    
      <div className={`${styles.body} ${dark}`}>
      <SideBar/>
        <div className={`${styles.container} ${dark}`}>
            <Head>
              <title>Início | move.it</title>
            </Head>

            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </div>
    </ChallengesProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  return {
    props: {
      level: level ? Number(level) : null,
      currentExperience: currentExperience ? Number(currentExperience) : null,
      challengesCompleted: challengesCompleted ? Number(challengesCompleted) : null
    },
  };
};