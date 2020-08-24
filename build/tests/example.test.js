'use strict';

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _mochaSteps = require('mocha-steps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocha steps demo', function () {
    var browser = void 0;
    var page = void 0;

    before(async function () {
        browser = await _puppeteer2.default.launch({
            headless: true,
            slowMo: 0,
            devtools: false
            // defaultViewport: null,
            // args: ['--start-maximized']
        });

        page = await browser.newPage();
    });

    (0, _mochaSteps.step)('should load google homepage', async function () {
        await page.goto("https:google.com");
    });

    (0, _mochaSteps.step)('Step 2 should fail', async function () {
        // console.log("From step2");
        await page.waitForSelector('#FAIL');
    });

    (0, _mochaSteps.step)('Step 3', async function () {
        console.log("From step3");
    });

    (0, _mochaSteps.step)('Step 4', async function () {
        console.log("From step4");
    });

    after(async function () {
        await browser.close();
    });
});