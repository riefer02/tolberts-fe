import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from '../../assets/styles/pages/_events.module.scss';
import { getEvents } from '../../lib/fetchEvents';

export default function Events({ events }) {
  return (
    <Layout title="Events">
      <div className="container">
        <ul className={styles.eventList}>
          {events.map((i, index) => {
            const event = i.node.postTypeEvent;
            const id = i.node.id;

            return (
              <li className={styles.eventItem} key={index}>
                <div className={styles.eventItem__image}>
                  <img src={event.image.sourceUrl} alt="" />
                </div>
                <div className="flex flex-col w-full">
                  <div className={styles.eventItem__description}>
                    <h4>{event.date}</h4>
                    <h3>{event.name}</h3>
                    <h5>{event.location}</h5>
                  </div>
                  <div className={styles.eventItem__actions}>
                    <a href={event.cta}>Get Tickets!</a>
                    <Link href={`/events/${id}`}>
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

export async function getServerSideProps(ctx) {
  let events = await getEvents();

  return {
    props: {
      events,
    },
  };
}
