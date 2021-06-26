const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const accountRouter = require('./account.route');
const adminRouter = require('./admin.route');
const productRouter = require('./product.route');

function route(app) {
    app.use('/', siteRouter);
    app.use('/news', newsRouter);
    app.use('/account', accountRouter);
    app.use('/admin',adminRouter);
    app.use('/product',productRouter);
}

module.exports = route;
