import Head from 'next/head';
import Layout from '../components/Layout';
import VideoBackground from '../components/VideoBackground';
import PrimaryHeader from '../components/PrimaryHeader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Lewd Dudes</title>
        <link rel="icon" href="/tld-logo.svg" />
      </Head>
      <Layout>
        <VideoBackground></VideoBackground>
        <PrimaryHeader></PrimaryHeader>
      </Layout>
    </div>
  );
}
