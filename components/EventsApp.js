import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from '../assets/styles/components/_events.module.scss';
import animation from '../assets/styles/utilities/_animations.module.scss';

const Layout = dynamic(import('../components/Layout'));
const TopLeftAction = dynamic(import('../components/TopLeftAction'));
const Modal = dynamic(import('../components/Modal'));
const FadeIn = dynamic(import('../components/FadeIn'));

const returnMessageContent = {
  message: `Do you want to return to tolbertsrestaurant.com?`,
  actionType: 'return',
};

export default function Events({ events }) {
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    activeModal
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');
  }, [activeModal]);

  return (
    <Layout>
      <h1 className={styles.pageHeader}>Tolbert's Live Music</h1>
      <FadeIn isVisible={activeModal}>
        {activeModal && (
          <Modal
            content={returnMessageContent}
            setActiveModal={setActiveModal}
          />
        )}
      </FadeIn>
      <TopLeftAction actionType="return" setActiveModal={setActiveModal} />
      <div className="container">
        <ul className={styles.eventList}>
          {events.map((i, index) => (
            <EventItem key={index} event={i} />
          ))}
        </ul>
      </div>
      <div className={styles.invisibleFooter}></div>
    </Layout>
  );
}

const EventItem = ({ event }) => {
  const [isOpen, setOpen] = useState(false);
  const {
    imageSrc,
    placeholder,
    date,
    primaryHeader,
    secondaryHeader,
    description,
    startTime,
    endTime,
  } = event;

  return (
    <li className={styles.eventItem}>
      {imageSrc && (
        <div className={styles.eventItem__image}>
          <Image
            src={imageSrc}
            alt={''}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={placeholder}
            className={`rounded-lg ${styles.event__image}`}
          />
        </div>
      )}
      <div className="flex flex-col w-full relative">
        <div className={styles.eventItem__description}>
          <div className={styles.eventItem__dateTimes}>
            <h4 className={styles.eventItem__date}>{date}</h4>
            <div className={styles.eventItem__times}>
              <span></span>
              {startTime && (
                <h5 className={styles.eventItem__startTime}>{startTime}</h5>
              )}
              {endTime && (
                <h5 className={styles.eventItem__endTime}>- {endTime}</h5>
              )}
            </div>
          </div>
          <h3>{primaryHeader}</h3>
          {secondaryHeader && <h5>{secondaryHeader}</h5>}
          <p className={`${isOpen ? animation.fadeIn : animation.fadeOut}`}>
            {description}
          </p>
          <div className={styles.eventItem__actions}>
          {description?.length > 0 && (
            <div
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              {!isOpen ? 'More Info' : 'Close Info'}
            </div>
          )}
        </div>
        </div>
        {/* <div className={styles.eventItem__actions}>
          {description?.length > 0 && (
            <div
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              {!isOpen ? 'More Info' : 'Close Info'}
            </div>
          )}
        </div> */}
      </div>
    </li>
  );
};
