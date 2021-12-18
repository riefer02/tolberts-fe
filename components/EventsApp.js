import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import styles from '../assets/styles/pages/_events.module.scss';

export default function Events({ events }) {
  return (
    <Layout title="Events">
      <div className="container">
        <ul className={styles.eventList}>
          {events.map((i, index) => {
            return (
              <li className={styles.eventItem} key={index}>
                <div className={styles.eventItem__image}>
                  <Image
                    src={i.imageSrc}
                    alt={`promotional image for ${i.name} event`}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={i.placeholder}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className={styles.eventItem__description}>
                    <h4>{i.date}</h4>
                    <h3>{i.name}</h3>
                    <h5>{i.location}</h5>
                  </div>
                  <div className={styles.eventItem__actions}>
                    <a href={i.cta}>Get Tickets!</a>
                    <Link href={`/events/${i.id}`}>
                      <a>More Info</a>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
