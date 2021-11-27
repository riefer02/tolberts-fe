import Head from 'next/head';
import VideoBackground from '../components/VideoBackground';
import Navigation from '../components/Navigation';
import styles from '../assets/styles/pages/_home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Lewd Dudes</title>
        <link rel="icon" href="/tld-logo.svg" />
      </Head>
      <Navigation />
      <div className={styles.background}>
        <VideoBackground />
        <div className={styles.homeMarquee}>
          <div className={styles.logoContainer}>
            <i className="icon-tld-logo"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
