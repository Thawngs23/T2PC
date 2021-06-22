const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const accountRouter = require('./account.route');

function route(app) {
    app.use('/', siteRouter);
    app.use('/news', newsRouter);
    app.use('/account', accountRouter);
}

module.exports = route;
