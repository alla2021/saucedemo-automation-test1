import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';

const pages = {
    loginPage: LoginPage
}

Given('User is located on the main page of saucedemo website', async function () {
    await pages.loginPage.open();
});

When('User click “Login” button', async function () {
    const button = await pages.loginPage.loginBtn;
    await button.click(); 
});

Then('User should see “Epic sadface: Username is required” error message', async function () {
    await pages.loginPage.expectErrorMessage('Epic sadface: Username is required');
});


