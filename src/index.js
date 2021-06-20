const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const exphbs = require('express-handlebars');
const { extname, join } = require('path');
const route = require('./routes/index.route');
const db = require('./config/db');

db.connect();
route(app);
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));

//sử dụng file tĩnh
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
