/**
 * @author songchengen
 * @date 2018/7/17
 * @description 中间件
 */

const { success, error } = require('./util');

module.exports = async (ctx, next) => {
    ctx.success = success.bind(null, ctx);
    ctx.error = error.bind(null, ctx);
    await next();
}
