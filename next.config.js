const withSass = require('@zeit/next-sass');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withSass(withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  },
}));
