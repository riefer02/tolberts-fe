import React from 'react';
import styles from '../assets/styles/components/_tooltip.module.scss';

export default function ToolTip({ isVisible, children }) {
  return (
    <div className={`${styles.tooltip} ${isVisible ? styles.isVisible : ''}`}>
      {children}
    </div>
  );
}
