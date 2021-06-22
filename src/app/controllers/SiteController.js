const Event = require('../models/Event');
const { mongooseToObject } = require('../../tools/mongoose');

class SiteController {
    index(req, res, next) {
        Event.find({})
            .then((events) => {
                res.render('home', { events: mongooseToObject(events) });
            })
            .catch(next);
    }

    login(req, res) {
        res.render('login');
    }

    register(req, res) {
        res.render('register');
    }
}

module.exports = new SiteController();
