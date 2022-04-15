import Head from 'next/head';
// import EventApp from '../components/EventsApp';
// import { formatQueriedEventData, sortByDate } from '../lib/events';
// import { getEvents } from '../lib/fetchEvents';

export default function Home({ events }) {
  return (
    <div className="page">
      <Head>
        <title>Tolbert's Live Music Calendar</title>
        <link rel="icon" href="#" />
        <meta
          name="description"
          content="Live Music Calendar for Tolbert's Chili Parlor Restaurant in Grapevine, Texas."
          key="desc"
        />
        <meta property="og:title" content="Tolbert's Live Music Calendar" />
        <meta
          property="og:description"
          content="Live Music Events Calendar for Tolbert's Restaurant and Chili Parlor in Grapevine, Texas"
        />
        <meta property="og:image" content="/images/seo-image.jpeg" />
      </Head>
      {/* {events?.length > 0 && <EventApp events={events} />} */}
      <div className="grid place-items-center h-screen text-white text-lg max-w-md mx-auto">
        We are experiencing technical difficulties with Amazon Web Services.
        Please be patient while Jeff Bezos works closely with our staff to solve
        this issue.
      </div>
    </div>
  );
}

// export async function getServerSideProps(ctx) {
//   const formattedEvents = [];
//   const events = await getEvents();

//   for (const event of events) {
//     formattedEvents.push(await formatQueriedEventData(event));
//   }

//   return {
//     props: {
//       events: sortByDate(formattedEvents),
//     },
//   };
// }
