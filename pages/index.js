import Head from 'next/head';
import EventApp from '../components/EventsApp';
import { getEvents } from '../lib/fetchEvents';
import { formatQueriedEventData } from '../lib/events';

export default function Home({ events }) {
  return (
    <div>
      <Head>
        <title>Tolbert's Music</title>
        <link rel="icon" href="#" />
      </Head>
      <EventApp events={events} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let events = await getEvents();
  const formattedEvents = [];

  for (const event of events) {
    formattedEvents.push(await formatQueriedEventData(event));
  }

  return {
    props: {
      events: formattedEvents,
    },
  };
}
