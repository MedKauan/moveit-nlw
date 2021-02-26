import Head from 'next/head';

import useWindowSize from 'react-use/lib/useWindowSize';

import Confetti from 'react-confetti';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../hooks/useChallenges';

export default function Home() {
  const { width, height } = useWindowSize();

  const { levelUpCompleted } = useContext(ChallengesContext);

  return (
    <>
      {levelUpCompleted && <Confetti width={width} height={height} />}

      <div className={styles.container}>
        <Head>
          <title>Inicio | Move It</title>
        </Head>

        <ExperienceBar />

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
      </div>
    </>
  );
}
