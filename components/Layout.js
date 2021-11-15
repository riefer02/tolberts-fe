import React from 'react';
import styles from '../assets/styles/components/_layout.module.scss';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';

export default function Layout({ children, title }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <PageHeader title={title} />
      {children}
    </div>
  );
}
