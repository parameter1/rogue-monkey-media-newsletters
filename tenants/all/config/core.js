const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'rural-water-wire': {
    name: 'Newsletter',
    ...brands.nrwa,
  },
};

module.exports = config;
