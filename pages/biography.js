import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Layout from '../components/Layout';
import { getBandmates } from '../lib/fetchBandmates';
import styles from '../assets/styles/pages/_biography.module.scss';

export default function Biography({ bandmates }) {
  console.log(bandmates);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Layout title="Biography">
      <div className="container">
        <div ref={ref}>
          <h2>{`Header inside viewport ${inView}.`}</h2>
        </div>
        <div className={styles.bioList__image}>
          {bandmates.map((i) => {
            const bandmate = i.node.postTypeBandmate;
            const id = i.node.id;
            return (
              <div key={id} className={styles.bioItem}>
                <div className={styles.bioItem__image}>
                  <Image
                    src={bandmate.image.sourceUrl}
                    alt={`band member ${bandmate.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.bioItem__description}>
                  <h4>{bandmate.instruments}</h4>
                  <h3>{bandmate.name}</h3>
                  <h5>{bandmate.quote}</h5>
                  <p>{bandmate.biography}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let bandmates = await getBandmates();

  return {
    props: {
      bandmates,
    },
  };
}
