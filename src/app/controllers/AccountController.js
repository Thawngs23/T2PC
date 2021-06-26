const bcryt = require('bcrypt');
const Account = require('../models/Account');
const session = require('express-session');
const path = require('path');

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
        if(formData.sex=='male')
            formData.img = '/img/user-default.png';
        else   
        formData.img = '/img/user-default-female.png';
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
    logout(req,res){
        req.session.destroy(function(err){
            return res.redirect('/');
        })
    }
    
}

module.exports = new AccountController();
