'use strict';
const { expect } = require('chai');
const Tokens = require('..');
const tokens = new Tokens(Tokens.Network.PRIVATE);

describe('Tokens', () => {
  it('should get all tokens', () => {
    const allTokens = tokens.all();
    expect(allTokens).to.be.be.an('array');
    expect(allTokens[0]).to.have.property('name');
    expect(allTokens[0]).to.have.property('symbol');
    expect(allTokens[0]).to.have.property('decimals');
    expect(allTokens[0]).to.have.property('address');
  });

  it('should get token by symbol', () => {
    const firstToken = tokens.all()[0];
    const token = tokens.get(firstToken.symbol);
    expect(token).to.have.property('symbol', firstToken.symbol);
  });

  it('should get token by address', () => {
    const firstToken = tokens.all()[0];
    const token = tokens.get(firstToken.address);
    expect(token).to.have.property('symbol', firstToken.symbol);
  });

  it('should check if token exists', () => {
    const firstToken = tokens.all()[0];
    const exists = tokens.exists(firstToken.symbol);
    expect(exists).to.be.equal(true);
  });

  it('should throw an error when getting an invalid token', () => {
    const fn = () => tokens.get('AAA');
    expect(fn).to.throw;
  });

  it('should parse an amount', () => {
    const firstToken = tokens.all()[0];
    const amount = '1';
    const token = tokens.get(firstToken.symbol);
    const decimals = token.decimals;
    const formattedAmount = tokens.parseAmount(amount, firstToken.symbol);
    const expectedFormattedAmount = amount + '0'.repeat(decimals);
    expect(formattedAmount).to.be.equal(expectedFormattedAmount);
  });

  it('should format an amount', () => {
    const firstToken = tokens.all()[0];
    const token = tokens.get(firstToken.symbol);
    const decimals = token.decimals;
    const amount = '1' + '0'.repeat(decimals);
    const parsedAmount = tokens.formatAmount(amount, firstToken.symbol);
    const expectedParsedAmount = amount.substr(0, amount.length - decimals);
    expect(parsedAmount).to.be.equal(expectedParsedAmount);
  });
});
