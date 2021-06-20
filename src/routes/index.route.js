const newsRouter = require('./news.route');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });
    app.use('/news', newsRouter);
}

module.exports = route;
