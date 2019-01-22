const koa = require('koa');
const router = require('koa-router')();
const app = new koa();
const response = require('./index');

const code = {
  UNKNOWN_ERROR: [1, 'Sorry, you seem to have encountered some unknown errors.']
};

app.use(response);

router
  .get('/', (ctx, next) => {
    ctx.success({
      name: 'test'
    })
  })
  .get('/error_test', (ctx, next) => {
    ctx.error(code.UNKNOWN_ERROR);
  })
  .get('/throw', (ctx, next) => {
    ctx.throw(500, 'Internal Server Error');
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3030);