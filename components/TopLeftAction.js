import React from 'react';
import { useRouter } from 'next/router';
import ToolTip from './ToolTip.js';
import useHover from '../hooks/useHover';
import styles from '../assets/styles/components/_top-left-action.module.scss';

export default function TopLeftAction({ actionType }) {
  const router = useRouter();
  const [hoverRef, isHovered] = useHover();

  return (
    <div className={styles.topLeftAction}>
      <div className={styles.topLeftAction__Content} ref={hoverRef}>
        {actionType === 'back' && (
          <span
            className={styles.topLeftAction__backArrow}
            onClick={() => router.push('https://tolbertsrestaurant.com')}
          ></span>
        )}
      </div>
      <ToolTip isVisible={isHovered}>Return to Tolbert's Restaurant Site</ToolTip>
    </div>
  );
}
