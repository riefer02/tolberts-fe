function Error({ statusCode, title }) {
  return (
    <div>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      <p>{title}</p>
    </div>
  );
}

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

export default Error;
