import React from 'react';
import styles from '../assets/styles/components/_layout.module.scss';
import PageHeader from './PageHeader';
import PageLayout from './PageLayout';
import Head from 'next/head';

export default function Layout({ children, title }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/tld-logo.svg" />
      </Head>
      <PageLayout>
        {title && <PageHeader title={title} />}
        {children}
      </PageLayout>
    </div>
  );
}
