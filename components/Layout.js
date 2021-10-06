import React from 'react';
import styles from '../assets/styles/components/layout.module.scss';
import Image from 'next/image';

export default function Layout({ children }) {
  return <div className={styles.background}>{children}</div>;
}
