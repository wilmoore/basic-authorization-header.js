# basic-authorization-header
> RFC2617 basic authorization header from username and password.

[![Build Status](http://img.shields.io/travis/wilmoore/basic-authorization-header.js.svg)](https://travis-ci.org/wilmoore/basic-authorization-header.js) [![Code Climate](https://codeclimate.com/github/wilmoore/basic-authorization-header.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/basic-authorization-header.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install basic-authorization-header --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/basic-authorization-header.svg)](https://www.npmjs.org/package/basic-authorization-header) [![NPM downloads](http://img.shields.io/npm/dm/basic-authorization-header.svg)](https://www.npmjs.org/package/basic-authorization-header) [![Dependency Status](https://gemnasium.com/wilmoore/basic-authorization-header.js.svg)](https://gemnasium.com/wilmoore/basic-authorization-header.js)

## Example

```js
var basic = require('basic-authorization-header');
var headers = {
  'Authorization': basic("Aladdin", "open sesame"),
};

//=> { Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==' }
```

## API

### `basic(user, pass)`

###### arguments

 * `user: (String)` username.
 * `pass: (String)` password.

###### returns

 * `(String)` basic authorization header value.

## Reference

- [RFC2617](https://tools.ietf.org/html/rfc2617#section-2)
- [Security Considerations](https://tools.ietf.org/html/rfc2617#section-4)
- [Increasing Security](http://security.stackexchange.com/a/27881/72283)
- [http.request(options[, callback])](https://nodejs.org/api/http.html#http_http_request_options_callback)

## Notes

If you just want the token, check out [basic-auth-token](https://www.npmjs.com/package/basic-auth-token).

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/basic-authorization-header.js.svg)]()
