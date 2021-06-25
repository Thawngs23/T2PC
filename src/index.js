const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const exphbs = require('express-handlebars');
const { extname, join } = require('path');
const route = require('./routes/index.route');
const db = require('./config/db');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

app.use(methodOverride('_method'));
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: 'somesecret',
        cookie: { maxAge: 6000000 },
    }),
);
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});
db.connect();
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
route(app);
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resources\\views'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
