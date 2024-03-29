import Head from "next/head";
// import EventApp from '../components/EventsApp';
import { formatQueriedEventData, sortByDate } from "../lib/events";
import { getEvents } from "../lib/fetchEvents";
import dynamic from "next/dynamic";

const EventApp = dynamic(import("../components/EventsApp"), { ssr: false });

export default function Home({ events }) {
  return (
    <div className="page">
      <Head>
        <title>Tolbert's Live Music Calendar</title>
        <link rel="icon" href="#" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
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
      {/* <div className="grid place-items-center h-screen text-gray-900 text-lg max-w-md mx-auto p-8">
        We are experiencing technical difficulties with Amazon Web Services.
        Please be patient while Jeff Bezos works closely with our staff to solve
        this issue.
      </div> */}
    </div>
  );
}

export async function getServerSideProps({ query, res }) {
  const formattedEvents = [];
  const events = await getEvents();

  for (const event of events) {
    const formattedEvent = await formatQueriedEventData(event);
    if (formattedEvent) {
      // Only add the event if it's not null
      formattedEvents.push(formattedEvent);
    }
  }

  return {
    props: {
      events: sortByDate(formattedEvents),
    },
  };
}
