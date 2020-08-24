import puppeteer from 'puppeteer';
import { step } from 'mocha-steps';

describe('Mocha steps demo', () => {
    let browser;
    let page;

    before(async function(){
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 0,
            devtools: false,
            // defaultViewport: null,
            // args: ['--start-maximized']
        });

        page = await browser.newPage();
    });

    step('should load google homepage', async() => {
        await page.goto("https:google.com");
    });

    step('Step 2', async() => {
        console.log("From step2");
    });

    step('Step 3', async() => {
        console.log("From step3");
    });

    after(async function() {
        await browser.close();
    });
});
