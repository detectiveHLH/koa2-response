/**!
 * koa2-response - index.js
 * Copyright(c) 2018
 * MIT Licensed
 *
 * Authors:
 *   detectiveHLH <detectivehlh@qq.com>
 */

'use strict';

/**
 * Module dependencies.
 */

let response = {
  data: {},
  status: {
    code: 0,
    message: 'SUCCESS'
  }
};

/**
 * response
 * @param ctx
 * @param data 数据
 * @param code 错误码 || [错误码, 错误描述]
 * @param message 错误描述
 */
exports.response = (ctx, data, code, message) => {
  if (typeof code == 'object') {
    message = code[1];
    code = code[0];
  }
  ctx.body = {
    data,
    status: {
      code,
      message
    }
  }
}

/**
 * response 成功
 * @param ctx
 * @param data 数据
 * @param code 错误码 || [错误码, 错误描述]
 * @param message 错误描述
 */
exports.success = (ctx, data, code = 0, message = 'SUCCESS') => {
  if (typeof code == 'string') {
    message = code;
  }
  this.response(ctx, data, 0, message);
}

/**
 * response 异常
 * @param ctx
 * @param code 错误码 || [错误码, 错误描述]
 * @param message 错误描述
 */
exports.error = (ctx, code = 1, message = 'ERROR') => {
  if (typeof code == 'object') {
    message = code[1];
    code = code[0];
  }
  this.response(ctx, response.data, code, message);
}