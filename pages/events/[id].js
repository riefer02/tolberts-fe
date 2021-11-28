import React from 'react';
import Layout from '../../components/Layout';
// import styles from '../../assets/styles/pages/_events.module.scss';
import { getSingleEvent } from '../../lib/fetchEvents';
import { useRouter } from 'next/router';

export default function Event({ event }) {
  const router = useRouter();
  const { name, location, primaryHeader, secondaryHeader, date, cta, image } =
    event.postTypeEvent;

  return (
    <Layout title={name}>
      <div className="container">
        <span onClick={() => router.back()}>Click here to go back</span>
        <h1>{name}</h1>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let { id } = ctx.params;
  let event = await getSingleEvent(id);

  return {
    props: {
      event,
    },
  };
}
