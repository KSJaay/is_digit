# is_digit

> A simple Node.js package to check if your variable is an integer.

## Install
```bash
$ npm install --save @ksjaay/is_digit
```

## Example
Check if given varibale is an integer.

##### is_Digit(value)
```javascript
const { is_Digit } = require('@ksjaay/is_digit');

is_Digit(1); // => true
is_Digit('1'); // => true
is_Digit([1]); // => true
is_Digit({1: 'hello'}); // => false
```

Check if keys and/or values in an object are an integer.
##### is_Object_Digit(value, key: boolean, value: boolean)
```javascript
const { is_Object_Digit } = require('@ksjaay/is_digit');

is_Object_Digit({1: '1'}, true, false) // => true
is_Object_Digit({1: 'hello'}, true, false) // => true
is_Object_Digit({1: 'hello'}, true, true) // => false

```

## License

`@ksjaay/is_digit` is freely distributable under the terms of the [Apache License 2.0](LICENSE).
