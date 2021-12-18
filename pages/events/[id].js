import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../assets/styles/pages/_events.module.scss';
import { getSingleEvent } from '../../lib/fetchEvents';
import { formatQueriedEventData } from '../../lib/events';

export default function Event({ event }) {
  const { name, location, imageSrc, date, cta, placeholder, id, description } =
    event;

  return (
    <Layout>
      <div className={`${styles.eventDetails} container`}>
        <div className={styles.eventItem}>
          <div className={styles.eventItem__image}>
            <Image
              src={imageSrc}
              alt={`promotional image for ${name} event`}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={placeholder}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className={styles.eventItem__description}>
              <h4>{date}</h4>
              <h3>{name}</h3>
              <h5>{location}</h5>
              <p>{description}</p>
            </div>
            <div className={styles.eventItem__actions}>
              <a href={cta}>Get Tickets!</a>
              <Link href={`/events/${id}`}>
                <a>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let { id } = ctx.params;
  let event = await getSingleEvent(id);

  return {
    props: {
      event: await formatQueriedEventData(event),
    },
  };
}
