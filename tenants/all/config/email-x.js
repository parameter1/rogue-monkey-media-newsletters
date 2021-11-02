const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://roguemonkeymedia.serve.email-x.parameter1.com');

config
  .setAdUnits('rural-water-wire', [
    {
      name: 'ad-slot-1',
      id: '61795c6f1cae6a6ce858a42b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '61795cfb1cae6adea058a435',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '61795d0f1cae6a231e58a451',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
