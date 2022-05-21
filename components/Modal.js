import React from 'react';
import styles from '../assets/styles/components/_modal.module.scss';
import { useRouter } from 'next/router';

export default function Modal({ content, setActiveModal }) {
  const router = useRouter();

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalMessage}>{content.message}</div>
        <div className={styles.modalButtonGroup}>
          {content.actionType === 'return' && (
            <div>
              <button
                onClick={() =>
                  router.push('https://www.tolbertsrestaurant.com')
                }
              >
                Yes
              </button>
            </div>
          )}
          <button onClick={() => setActiveModal(false)}>No</button>
        </div>
      </div>
    </div>
  );
}
