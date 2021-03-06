import React from 'react';
import useHover from '../hooks/useHover';
import styles from '../assets/styles/components/_top-left-action.module.scss';

export default function TopLeftAction({ actionType, setActiveModal }) {
  const [hoverRef, isHovered] = useHover();

  return (
    <div className={styles.topLeftAction}>
      <div
        className={styles.topLeftAction__Content}
        ref={hoverRef}
        onClick={() => setActiveModal((mode) => !mode)}
      >
        {actionType === 'return' && (
          <span className={styles.topLeftAction__backArrow}></span>
        )}
      </div>
    </div>
  );
}
