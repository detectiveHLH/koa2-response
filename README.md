# koa2-response
A middleware which can let you send your response easier

Install
=
```bash
npm install koa2-response
```

Usage
=
```javascript
const koa = require('koa');
const app = new koa();
const router = require('koa-router')();
const response = require('koa2-response');

const code = {
  UNKNOWN_ERROR: [1, 'Sorry, you seem to have encountered some unknown errors.']
}

router
  .get('/', (ctx, next) => {
    ctx.success({
      name: 'test'
    })
  })
  .get('/error_test', (ctx, next) => {
     ctx.error(code.UNKNOWN_ERROR);
  })

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log(`Server is running on port 3000`);
```
     
Licences
=
[MIT](https://github.com/detectiveHLH/koa2-response/blob/master/LICENSE)