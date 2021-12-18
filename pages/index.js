import Head from 'next/head';
import EventApp from '../components/EventsApp';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tolbert's Music</title>
        <link rel="icon" href="#" />
      </Head>
      <EventApp />
    </div>
  );
}
