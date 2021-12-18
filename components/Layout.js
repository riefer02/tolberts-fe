import React from 'react';
import styles from '../assets/styles/components/_layout.module.scss';
import Head from 'next/head';

export default function Layout({ children, title }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/tld-logo.svg" />
      </Head>
      {children}
    </div>
  );
}
