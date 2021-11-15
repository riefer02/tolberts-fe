import React from 'react';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout';

export default function Biography() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Layout title="Biography">
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
    </Layout>
  );
}
