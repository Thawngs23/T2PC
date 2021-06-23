


class AccountController {
    login(req, res) {
        res.render('account/login');
    }

    register(req, res) {
        res.render('account/register');
    }
    save(req,res,next)
    {
        res.send('saved');
    }
}

module.exports = new AccountController();
