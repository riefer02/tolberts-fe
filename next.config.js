const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  images: {
    domains: ['tolbertscms.com', 'tolbertsmusic.com'],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
});
