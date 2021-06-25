const bcryt = require('bcrypt');
const Account = require('../models/Account');
const session = require('express-session');
var help;

class AccountController {
    login(req, res) {
        res.render('account/login');
    }

    register(req, res) {
        res.render('account/register');
    }
    save(req, res, next) {
        const formData = req.body;
        const salt = bcryt.genSaltSync(10);
        formData.password = bcryt.hashSync(
            formData.password,
            salt,
            function (err, hash) {},
        );
        const account = new Account(formData);
        account.save();
        res.redirect('/account/login');
    }
    logingin(req,res,next){
       Account.findOne({username: req.body.inputName}, function(err,acc){
           if(err) handleError(err);
           if(acc)
           {
               const kq = bcryt.compareSync(req.body.inputPassword,acc.password);
               if(kq)
               {
                   req.session.User ={
                       checkLogin: 'true',
                       img: acc.img,
                       name: acc.username,
                       role: acc.role,
                   };
                   res.redirect('/'); 
               }
               else
               {
                  help = {
                      loginHelp: 'Tên đăng nhập hoặc mật khẩu không đúng ! Vui lòng kiểm tra lại',
                  };
                  res.render('account/login',{help});
               }
           }
           else
           {
            help = {
                loginHelp: 'Tài khoản không tồn tại ! Vui lòng kiểm tra lại',
            };
            res.render('account/login',{help});
           }
       })

    }
}

module.exports = new AccountController();
