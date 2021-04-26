import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import styles from "../styles/App.module.css";
import { DestinationForm } from "../components/DestinationForm";
import { ChakraProvider, Heading } from "@chakra-ui/react"
import { RouteResult } from "../components/RouteResult";


export default function RoutesApp() {
  return (
    <ChakraProvider>
      <Head>
        <title>THAT'S THE WAY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className="App">
          <Heading mb="6">Where shall it go?</Heading>
          <DestinationForm />
          <RouteResult />
        </div>
        <footer className={styles.footer}>
          <a
            href="https://samuil.uber.space"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Samuel Berchtold{" "}
            <img
              src="/SB.svg"
              alt="Samuel Berchtold"
              title="Samuel Berchtold"
              className={styles.logo}
            />
          </a>
        </footer>
      </div>
      </ChakraProvider>
  );
}
