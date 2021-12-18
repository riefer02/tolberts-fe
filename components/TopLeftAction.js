import React from 'react';
import { useRouter } from 'next/router';
import styles from '../assets/styles/components/_top-left-action.module.scss';

export default function TopLeftAction({ actionType }) {
  const router = useRouter();

  return (
    <div className={styles.topLeftAction}>
      <div className={styles.topLeftAction__Content}>
        {actionType === 'back' && (
          <span
            className={styles.topLeftAction__backArrow}
            onClick={() => router.push('https://tolbertsrestaurant.com')}
          ></span>
        )}
      </div>
    </div>
  );
}
