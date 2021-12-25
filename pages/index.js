import Head from 'next/head';
import EventApp from '../components/EventsApp';
import { formatQueriedEventData, sortByDate } from '../lib/events';
import { getEvents } from '../lib/fetchEvents';
import { getPlaiceholder } from 'plaiceholder';

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
  const formattedEvents = [];
  const events = await getEvents();

  for (const event of events) {
    const { css, img } = await getPlaiceholder(
      event.node.postTypeEvent.image.sourceUrl
    );
    formattedEvents.push({
      id: event.node.id,
      imageSrc: event.node.postTypeEvent.image.sourceUrl,
      // placeholder: css,
      ...event.node.postTypeEvent,
    });
    // formattedEvents.push(await formatQueriedEventData(event));
  }

  return {
    props: {
      events: sortByDate(formattedEvents),
    },
  };
}
