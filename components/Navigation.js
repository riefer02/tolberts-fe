import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../assets/styles/components/_navigation.module.scss';
console.log(styles);

export default function Navigation() {
  const [isActive, setActive] = useState(false);
  const [audio] = useState(
    typeof Audio !== 'undefined' && new Audio('/audio/nav-open-mgs.mp3')
  );

  useEffect(() => {
    audio.paused ? audio.play() : '';
  }, [isActive]);

  return (
    <div className={styles.nav}>
      <div className={`${styles.navContent} ${isActive ? styles.isOpen : ''}`}>
        <NavToggle setActive={setActive} isActive={isActive} />
        <NavBody setActive={setActive} isActive={isActive} />
      </div>
    </div>
  );
}

function NavBody({ isActive }) {
  const navItems = ['biography', 'music', 'events', 'store', 'videos', 'misc'];
  return (
    <div
      className={`${styles.navOverlay} ${isActive ? styles.activeOverlay : ''}`}
    >
      <div className={styles.navBody}>
        <div className={styles.navBody__content}>
          <div className={styles.navBody__contentTop}>
            <Link href="/">
              <i className={`icon-tld-logo ${styles.navBody__logo}`}></i>
            </Link>
          </div>
          <div className={styles.navBody__contentMiddle}>
            <nav className={styles.navList}>
              {navItems.map((i, index) => (
                <Link key={index} href={i}>
                  <div className={styles.navList__item}>
                    <div className={styles.navList__icon}></div>
                    <div className={styles.navList__text}>{i}</div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.navBody__contentBottom}></div>
        </div>
      </div>
    </div>
  );
}

function NavToggle({ isActive, setActive }) {
  return (
    <div
      className={styles.navToggle}
      onClick={() => {
        setActive(!isActive);
      }}
    >
      <div
        className={`${styles.navToggle__button} ${
          isActive ? styles.active : ''
        }`}
      >
        <div className={styles.navToggle__buttonContent}>
          <span className={styles.navToggle__line}></span>
          <span className={styles.navToggle__line}></span>
          <span className={styles.navToggle__line}></span>
        </div>
      </div>
    </div>
  );
}
