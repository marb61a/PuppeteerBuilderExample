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

    step('should load google homepage', async() => {
        await page.goto("https:google.com");
    });

    step('Step 2 should fail', async() => {
        // console.log("From step2");
        await page.waitForSelector('#FAIL');
    });

    step('Step 3', async() => {
        console.log("From step3");
    });

    step('Step 4', async() => {
        console.log("From step4");
    });
});
