'use strict';
const Network = require('../network');

module.exports = {
  [Network.BSC]: require('./bsc'),
  [Network.PRIVATE]: require('./private'),
  [Network.SANDBOX]: require('./sandbox')
};
