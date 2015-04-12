'use strict'

/*!
 * imports.
 */

var token = require('basic-auth-token')

/*!
 * exports.
 */

module.exports = basic

/**
 * RFC2617 basic authorization header from username and password.
 *
 * @param  {String} user
 * User identifier.
 *
 * @param  {String} pass
 * Password.
 *
 * @return {String}
 * RFC2617 basic authorization.
 */

function basic (user, pass) {
  return 'Basic ' + token(user, pass)
}
