import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>THAT'S THE WAY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          THAT'S THE WAY
        </h1>

        <div className={styles.grid}>
        <form>
  <label>
    Where to:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://samuil.uber.space"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' '}
          <img src="/SB.svg" alt="Samuel Berchtold" title="Samuel Berchtold" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
