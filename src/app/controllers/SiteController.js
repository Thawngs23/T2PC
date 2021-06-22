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

}

module.exports = new SiteController();
