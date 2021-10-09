import React from 'react';
import styles from '../assets/styles/components/_video-background.module.scss';

export default function VideoBackground() {
  return (
    <div className={styles.video_container}>
      <iframe
        className={styles.iframe}
        src="https://www.youtube.com/embed/di_EGQUHWSY?start=32&autoplay=1&mute=1&playlist=di_EGQUHWSY&loop=1"
      ></iframe>
    </div>
  );
}
