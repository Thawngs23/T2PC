const bcryt = require('bcrypt');
const Account = require('../models/Account');

class AccountController {
    login(req, res) {
        res.render('account/login');
    }

    register(req, res) {
        res.render('account/register');
    }
    save(req,res,next)
    {

        const formData = req.body;
        const salt =  bcryt.genSaltSync(10);
        formData.password = bcryt.hashSync(formData.password,salt,function(err, hash) {});
        const account = new Account(formData);
        account.save();
        res.redirect('/account/login');
    }
}

module.exports = new AccountController();
