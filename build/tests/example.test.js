'use strict';

var _mochaSteps = require('mocha-steps');

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocha steps demo', function () {
    var page = void 0;

    before(async function () {
        page = await _builder2.default.build('Desktop');
    });

    after(async function () {
        await page.close();
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
});