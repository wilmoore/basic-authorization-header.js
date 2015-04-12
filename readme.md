# basic-authorization-header

[![Code Climate](https://codeclimate.com/github/wilmoore/basic-authorization-header.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/basic-authorization-header.js) [![Build Status](http://img.shields.io/travis/wilmoore/basic-authorization-header.js.svg)](https://travis-ci.org/wilmoore/basic-authorization-header.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard) [![NPM version](http://img.shields.io/npm/v/basic-authorization-header.svg)](https://www.npmjs.org/package/basic-authorization-header) [![NPM downloads](http://img.shields.io/npm/dm/basic-authorization-header.svg)](https://www.npmjs.org/package/basic-authorization-header) [![LICENSE](http://img.shields.io/npm/l/basic-authorization-header.svg)](license)

> RFC2617 basic authorization header from username and password.

    $ npm install basic-authorization-header --save

## Example

    var basic = require('basic-authorization-header');
    basic("Aladdin", "open sesame")
    //=> Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==

## API

###### `basic(user, pass)`

 * `user` username.
 * `pass` password.

## Reference

- [RFC2617](https://tools.ietf.org/html/rfc2617#section-2)
- [Security Considerations](https://tools.ietf.org/html/rfc2617#section-4)
- [Increasing Security](http://security.stackexchange.com/a/27881/72283)

## Notes

If you just want the token, check out [basic-auth-token](https://www.npmjs.com/package/basic-auth-token).

## License

  [MIT](license)

