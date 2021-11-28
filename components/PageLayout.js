import React from 'react';
import styles from '../assets/styles/components/_layout.module.scss';

export default function PageLayout({ children }) {
  return <div className={styles.pageLayout}>{children}</div>;
}
