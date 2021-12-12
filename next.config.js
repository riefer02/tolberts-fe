const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  images: {
    domains: ['lewdapi.com'],
    // formats: ['image/avif', 'image/webp'],
  },
});
