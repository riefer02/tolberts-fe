import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../assets/styles/pages/_events.module.scss';

const mockData = [
  {
    name: 'The Lewd Dudes @ Tolberts',
    id: 1,
  },
  {
    name: 'Time Safari @ Far Out Lounge',
    id: 2,
  },
  {
    name: 'Andrew Riefenstahl @ Hotel Vegas',
    id: 3,
  },
];

export default function Events() {
  return (
    <Layout title="Events">
      <div className="container mx-auto bg-indigo-300">
        <ul className={styles.eventList}>
          {mockData.map((i) => (
            <li className={styles.eventItem} key={i.id}>
              <h3>{i.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
