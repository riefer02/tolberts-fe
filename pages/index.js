import Head from 'next/head';
import EventApp from '../components/EventsApp';
import { formatQueriedEventData, sortByDate } from '../lib/events';

export default function Home({ events }) {
  return (
    <div>
      <Head>
        <title>Tolbert's Music</title>
        <link rel="icon" href="#" />
      </Head>
      {events?.length > 0 && <EventApp events={events} />}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const HOSTNAME_URL = process.env.HOSTNAME_URL;
  const events = await fetch(`${HOSTNAME_URL}/api/fetchEvents`)
    .then((res) => res.json())
    .then((data) => data);

  const formattedEvents = [];

  for (const event of events) {
    formattedEvents.push(await formatQueriedEventData(event));
  }

  return {
    props: {
      events: sortByDate(formattedEvents),
    },
  };
}
