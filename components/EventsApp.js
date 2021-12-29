import React, { useState } from 'react';
import Image from 'next/image';
import TopLeftAction from '../components/TopLeftAction';
import Layout from './Layout';
import styles from '../assets/styles/components/_events.module.scss';
import animation from '../assets/styles/utilities/_animations.module.scss';

export default function Events({ events }) {
  return (
    <Layout>
      <h1 className={styles.pageHeader}>Tolbert's Live Music</h1>
      <TopLeftAction actionType="back" />
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
            objectFit="cover"
            placeholder="blur"
            blurDataURL={placeholder}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col w-full">
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
        </div>
        <div className={styles.eventItem__actions}>
          {description?.length > 0 && (
            <span
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              More Info
            </span>
          )}
        </div>
      </div>
    </li>
  );
};
