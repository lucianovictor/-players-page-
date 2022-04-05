import { Header } from 'components/Header'
import { Main } from 'components/Main'
import Head from 'next/head'

import styles from 'styles/home.module.scss'
import { Background } from 'components/background'
import { Footer } from 'components/Footer'
import { usePlayer } from 'hook/usePlayer'

const HomePage = () => {
  const { player } = usePlayer()
  return (
    <div className={styles.container} style={{ background: player.color }}>
      <Head>
        <title>{player.firstName + ' ' + player.lastName}</title>
      </Head>
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default HomePage
