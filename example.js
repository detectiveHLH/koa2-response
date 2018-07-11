const koa = require('koa');
const router = require('koa-router')();
const app = new koa();
const response = require('koa2-response');

const code = {
  UNKNOWN_ERROR: [1, 'Sorry, you seem to have encountered some unknown errors.']
}

router
  .get('/', (ctx, next) => {
    response.success(ctx, {
      name: 'test'
    })
  })
  .get('/error_test', (ctx, next) => {
    response.error(ctx, code.UNKNOWN_ERROR);
  })

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);