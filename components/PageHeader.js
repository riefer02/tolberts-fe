import React from 'react';
import styles from '../assets/styles/components/_page-header.module.scss';

export default function PageHeader({ title }) {
  return (
    <div className={styles.pageHeader__content}>
      <h1 className={styles.pageHeader}>{title}</h1>
    </div>
  );
}
