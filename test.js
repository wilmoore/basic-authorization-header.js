'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var basic = require('./')

/*!
 * constants.
 */

var USER = 'Aladdin'
var PASS = 'open sesame'

/*!
 * parameters.
 */

var parameters = [
  { name: 'user:pass', args: [ USER, PASS ], expected: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==' },
  { name: 'user:', args: [ USER ], expected: 'Basic QWxhZGRpbjo=' },
  { name: ':pass', args: [ '', PASS ], expected: 'Basic Om9wZW4gc2VzYW1l' }
]

/*!
 * tests.
 */

test('basic()', function (t) {
  t.plan(parameters.length)

  parameters.forEach(function (p) {
    t.equal(basic.apply(null, p.args), p.expected, p.name)
  })
})
