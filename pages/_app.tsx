import React from 'react'
import { Provider } from 'react-redux'
import Button from '../components/Button'
import DestinationForm from '../components/DestinationForm'
import Head from 'next/head'
import { useStore } from '../store/store'
import '../styles/globals.css'
import styles from '../styles/App.module.css'

export default function RoutesApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Head>
        <title>THAT'S THE WAY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className="App">
        <h1>Where shall it go?</h1>
        <DestinationForm />
      <Component {...pageProps} /></div>
      <footer className={styles.footer}>
        <a
          href="https://samuil.uber.space"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Samuel Berchtold {' '}
          <img src="/SB.svg" alt="Samuel Berchtold" title="Samuel Berchtold" className={styles.logo} />
        </a>
      </footer>
      </div>
    </Provider>
  )
}