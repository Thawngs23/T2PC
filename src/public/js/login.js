function hideLogin() {
    document.getElementById('login-header').style.display = 'none';
}
function registerValidate() {
    var p = document.forms['register']['password'].value;
    var rp = document.forms['register']['password-confirm'].value;
    var un = document.forms['register']['username'].value;
    var n = document.forms['register']['name'].value;
    var phone = document.forms['register']['phone'].value;
    if (p != rp) {
        alert('Mật khẩu không trùng khớp ! Vui lòng kiểm tra lại');
        return false;
    }
    if (!un || !n || !phone) {
        alert('Vui lòng nhập đầy đủ thông tin !');
        return false;
    }
}
function loginValidate(){
    var u = document.forms['login-page']['inputName'].value;
    var p = document.forms['login-page']['inputPassword'].value;
    if(!u || !p)
    {
        alert('Vui lòng nhập đủ thông tin !');
        return false;
    }
    
}