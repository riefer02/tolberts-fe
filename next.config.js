// const { withPlaiceholder } = require('@plaiceholder/next');

// module.exports = withPlaiceholder({
module.exports = {
  images: {
    domains: ['tolbertscms.com', 'tolbertsmusic.com'],
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    HOSTNAME_URL: process.env.HOSTNAME_URL,
  },
};
