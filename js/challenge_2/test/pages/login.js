
class LoginPage {
    get username() { return $('[data-testid="username"]') }
    get password() { return $('[data-testid="password"]') }
    get submitButton() { return $('[data-testid="submit"]') } 
    
    loginAsAdmin() {
        $('[data-testid="username"]').click();
        $('[data-testid="username"]').setValue('admin');
        $('[data-testid="password"]').setValue('password');
    
        $('[data-testid="submit"]').click();
    }
}

module.exports = new LoginPage();
