const RoomsPage = require('./roomsPage')
class LoginPage {
    get username() { return $('[data-testid="username"]') }
    get password() { return $('[data-testid="password"]') }
    get submitButton() { return $('[data-testid="submit"]') } 
    
    loginAsAdmin() {
        this.username.setValue('admin');
        this.password.setValue('password');
        this.submitButton.click();
        return new RoomsPage();
    }
}

module.exports = LoginPage;
