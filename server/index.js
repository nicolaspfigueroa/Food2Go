const Koa = require('koa');
const app = new Koa();
const KoaBodyParser = require('koa-bodyparser');
const KoaStatic = require('koa-static');
const path = require('path');

const clientPath = __dirname + '/../../../client';

const db = require('./models/index.js');
const router = require('./router');
const bodyParser = new KoaBodyParser();
const koaStatic = new KoaStatic(clientPath);

const PORT = 3000;

app.use(koaStatic)
  .use(bodyParser)
  .use(router.routes());

(async function bootstrap () {
  await db.sequelize.sync();
  app.listen(PORT, () => console.log('Server listening...'));
})();