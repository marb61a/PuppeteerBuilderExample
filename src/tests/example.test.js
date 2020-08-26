import { step } from 'mocha-steps';
import { expect } from 'chai';

import Page from '../builder';
import LoginPage from '../pages/LoginPages';

describe('Mocha steps demo', () => {
     let page;
     let loginPage

    before(async function(){
        page = await Page.build('Desktop');
        loginPage = await new LoginPage(page);
    });

    after(async function() {
        await page.close();
    });

    step('Should load app homepage homepage', async() => {
        await page.goto("http://zero.webappsecurity.com/index.html");
        const signInButton = await page.isElementVisible('#signin_button');
        expect(signInButton).to.be.true;
        // await page.waitFor(5000);
    });

    step("Should display login form", async() => {
        await page.waitAndClick('#signin_button');
        const loginForm = await page.isElementVisible('#login_form');
        expect(loginForm).to.be.true;
        const signInButton = await page.isElementVisible('#signin_button');
        expect(signInButton).to.be.false;
    });

    step("Should login to application", async() => {
        // await page.waitAndType('#user_login', 'username');
        // await page.waitAndType('#user_password', 'password');
        // await page.waitAndClick('.btn-primary');
        await loginPage.login("username", "password");
        const navbar = await page.isElementVisible('.nav-tabs');
        expect(navbar).to.be.true;
    });

    step("Should have 6 navbar links", async () => {
        const navbarLinksCount = await page.getCount(".nav-tabs li");
        expect (navbarLinksCount).to.equal(6);
    });

});
