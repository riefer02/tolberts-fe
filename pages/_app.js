import Error from 'next/error';
import 'tailwindcss/tailwind.css';
import '../assets/styles/index.scss';

function MyApp({ Component, pageProps }) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
