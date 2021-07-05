# @8pay/tokens

An helper module that keeps track of all 8pay's supported tokens.

## Usage

```js
const Tokens = require('@8pay/tokens');

const tokens = new Tokens(Tokens.Network.BSC);

// Get token by symbol
const token1 = tokens.get('8PAY');
// Get token by address
const token2 = tokens.get('0xFeea0bDd3D07eb6FE305938878C0caDBFa169042');
// List all tokens
const allTokens = tokens.all();

// Parse amount with decimals
tokens.parseAmount('1', '8PAY'); // 1000000000000000000
// Format amount with decimals
tokens.formatAmount('1000000000000000000', '8PAY'); // 1


console.log(token1);

/*
{
    name: '8PAY Network',
    symbol: '8PAY',
    decimals: 18,
    address: '0xFeea0bDd3D07eb6FE305938878C0caDBFa169042'
}
*/
```

## Supported networks

* BSC
