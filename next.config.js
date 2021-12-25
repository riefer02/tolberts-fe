const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  images: {
    domains: ['tolbertscms.com', 'tolbertsmusic.com'],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //   }
  //   return config;
  // },
});
