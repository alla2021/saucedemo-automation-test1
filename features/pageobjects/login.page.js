import Page from './page.js';

class LoginPage extends Page {
    get loginBtn() { return $('#login-button') }
    get errorMessage() { return $('.error-message-container h3') }

    async getErrorMessageText() {
        return this.errorMessage.getText();
    }

    async expectErrorMessage(errorMessage) {
        return this.getErrorMessageText().then(text => expect(text).toContain(errorMessage));  
    }
    
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
