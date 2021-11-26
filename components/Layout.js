import React from 'react';
import styles from '../assets/styles/components/_layout.module.scss';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import Head from 'next/head';

export default function Layout({ children, title }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/tld-logo.svg" />
      </Head>
      <Navigation />
      <PageHeader title={title} />
      {children}
    </div>
  );
}
