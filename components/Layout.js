import React from 'react';
import styles from '../assets/styles/components/_layout.module.scss';

export default function Layout({ children }) {
  return <div className={styles.background}>{children}</div>;
}
