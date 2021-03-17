import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Front Range
        </h1>

        <p className={styles.description}>
          An engineering blog by Chris Bell
        </p>
      </main>

      <footer className={styles.footer}>
        Work in Progress
      </footer>
    </div>
  )
}
