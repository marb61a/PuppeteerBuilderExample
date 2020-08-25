import { step } from 'mocha-steps';

import Page from '../builder';

describe('Mocha steps demo', () => {
     let page;

    before(async function(){
        page = await Page.build('Desktop');
    });

    after(async function() {
        await page.close();
    });

    step('Should load google homepage', async() => {
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.waitAndClick('#onlineBankingMenu');
        await page.waitFor(5000);
    });
});
