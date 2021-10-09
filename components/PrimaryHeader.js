import React from 'react';
import styles from '../assets/styles/components/_primary-header.module.scss';
import Image from 'next/image';

export default function PrimaryHeader() {
  return (
    <div className={styles.primaryHeader}>
      <div className={styles.logoContainer}>
        <i className="icon-tld-logo"></i>
      </div>
    </div>
  );
}
