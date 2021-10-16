# is_digit

> A simple Node.js package to check if your variable is an integer.

## Install
```bash
$ npm install --save @ksjaay/is_digit
```

## Usage

```javascript
const { isDigit } = require('@ksjaay/is_digit')

isDigit(1) // true
isDigit('1') // true
isDigit([1]) // true
isDigit({1: 'asd'}) // false
```
