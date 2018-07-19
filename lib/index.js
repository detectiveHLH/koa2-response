/**!
 * koa2-response - index.js
 * Copyright(c) 2018
 * MIT Licensed
 *
 * Authors:
 *   detectiveHLH <detectivehlh@qq.com>
 */

const {success, error} = require('./util');

module.exports = async (ctx, next) => {
  success: success.bind(null, ctx);
  error: error.bind(null, ctx);
}