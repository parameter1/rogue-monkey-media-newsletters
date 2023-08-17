const NativeXConfiguration = require('@parameter1/base-cms-marko-newsletters-native-x/config');

const config = new NativeXConfiguration('https://roguemonkeymedia.native-x.parameter1.com/email-placement', { enabled: true });

config
  // default is equivalent to ROS
  .setAliasPlacements('default', [
    { name: 'default', id: '61795e75338044000184c29f' },
  ])
  .setAliasPlacements('rural-water-wire', [
    { name: 'native-slot-1', id: '61795e75338044000184c29f' },
    { name: 'native-slot-2', id: '61795eec338044000184c2b2' },
  ]);

module.exports = config;
