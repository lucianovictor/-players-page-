import { Header } from 'components/Header'
import { Main } from 'components/Main'
import Head from 'next/head'

import styles from 'styles/home.module.scss'

import players from 'data/players.json'
import { useState } from 'react'
import { Footer } from 'components/Footer'

const HomePage = () => {
  const [player, setPlayers] = useState(players[0])

  return (
    <div className={styles.container} style={{ background: player.color }}>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <Header lastName={player.lastName} />
      <Main {...player} />
      <Footer {...player} />
    </div>
  )
}

export default HomePage
