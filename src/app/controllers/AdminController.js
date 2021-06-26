
const session = require('express-session');
const Event = require('../models/Event');
const { mongooseToObject } = require('../../tools/mongoose');
var check;



class AdminController {
    
    dashboard(req,res){
 check = {
            opendashboard: true,
        };
        
        res.render('admin-dashboard/dashboard',{check});
    }
    event(req,res,next){
        check = {
                   opendashboard: true,
               };
               Event.find({})
               .then((events) => {
                   res.render('admin-dashboard/event', { events: mongooseToObject(events),check });
               })
               .catch(next);
            //    res.render('admin-dashboard/event',{check});
           }
}

module.exports = new AdminController();
