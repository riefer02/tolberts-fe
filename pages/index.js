import Head from "next/head";
// import EventApp from '../components/EventsApp';
import { formatQueriedEventData, sortByDate } from "../lib/events";
import { getEvents } from "../lib/fetchEvents";
import dynamic from "next/dynamic";

const EventApp = dynamic(import("../components/EventsApp"));

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
        <meta property="og:image" content="/images/seo-image.jpg" />

        <meta property="og:url" content="https://tolbertsmusic.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tolbert's Live Music Calendar" />
        <meta
          property="og:description"
          content="Live Music Events Calendar for Tolbert's Restaurant and Chili Parlor in Grapevine, Texas"
        />
        <meta
          property="og:image"
          content="https://tolbertsmusic.com/images/seo-image.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tolbertsmusic.com" />
        <meta property="twitter:url" content="https://tolbertsmusic.com" />
        <meta name="twitter:title" content="Tolbert's Live Music Calendar" />
        <meta
          name="twitter:description"
          content="Live Music Events Calendar for Tolbert's Restaurant and Chili Parlor in Grapevine, Texas"
        />
        <meta
          name="twitter:image"
          content="https://tolbertsmusic.com/images/seo-image.jpeg"
        />
      </Head>
      {events?.length > 0 && <EventApp events={events} />}
      {/* <div className="grid place-items-center h-screen text-white text-lg max-w-md mx-auto p-8">
        We are experiencing technical difficulties with Amazon Web Services.
        Please be patient while Jeff Bezos works closely with our staff to solve
        this issue.
      </div> */}
    </div>
  );
}

export async function getServerSideProps({ query, res }) {
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=43200, stale-while-revalidate=60'
  // );

  const formattedEvents = [];
  const events = await getEvents();

  for (const event of events) {
    formattedEvents.push(await formatQueriedEventData(event));
  }

  return {
    props: {
      events: sortByDate(formattedEvents),
    },
  };
}
