import { step } from 'mocha-steps';
import { expect } from 'chai';

import Page from '../builder';

describe('Mocha steps demo', () => {
     let page;

    before(async function(){
        page = await Page.build('Desktop');
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
        await page.waitAndType('#user_login', 'username');
        await page.waitAndType('#user_password', 'password');
        await page.waitAndClick('.btn-primary');
        const navbar = await page.isElementVisible('.nav-tabs');
        expect(navbar).to.be.true;
    });

});
