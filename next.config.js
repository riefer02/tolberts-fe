const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  images: {
    domains: ['tolbertscms.com', 'tolbertsmusic.com'],
  },
  target: 'serverless',
});
