'use strict';
const BigNumber = require('bignumber.js');
const tokens = require('./lib/tokens');
const Network = require('./lib/network');

class Tokens {
  constructor(network) {
    if (!tokens[network]) {
      throw Error('Unsupported network ' + network);
    }

    this._tokens = tokens[network];
  }

  all() {
    return this._tokens;
  }

  get(symbolOrAddress) {
    const token = this._tokens.find(
      e => e.symbol === symbolOrAddress || e.address.toLowerCase() === symbolOrAddress.toLowerCase()
    );

    if (!token) {
      throw Error('Invalid token');
    }

    return token;
  }

  exists(symbolOrAddress) {
    return this._tokens.some(
      e => e.symbol === symbolOrAddress || e.address.toLowerCase() === symbolOrAddress.toLowerCase()
    );
  }

  parseAmount(amount, symbolOrAddress) {
    return new BigNumber(amount).shiftedBy(this.get(symbolOrAddress).decimals).toFixed();
  }

  formatAmount(amount, symbolOrAddress) {
    return new BigNumber(amount).shiftedBy(this.get(symbolOrAddress).decimals * -1).toFixed();
  }
}

module.exports = Tokens;
module.exports.Network = Network;
