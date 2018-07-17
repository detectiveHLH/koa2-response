const koa = require('koa');
const router = require('koa-router')();
const app = new koa();
const response = require('./index');

const code = {
  UNKNOWN_ERROR: [1, 'Sorry, you seem to have encountered some unknown errors.']
}

app.use(response);

router
    .get('/success_test', (ctx, next) => {
        ctx.success({
            name: 'test'
        })
    })
    .get('/error_test', (ctx) => {
        ctx.error(code.UNKNOWN_ERROR)
    })

// router
//   .get('/', (ctx, next) => {
//     response.success(ctx, {
//       name: 'test'
//     })
//   })
//   .get('/error_test', (ctx, next) => {
//     response.error(ctx, code.UNKNOWN_ERROR);
//   })

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);