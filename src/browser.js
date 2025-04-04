const puppeteer = require('puppeteer');

let browser;
let page;

async function initializeBrowser() {
    browser = await puppeteer.launch({ headless: false, slowMo: 5 });
    page = await browser.newPage();
    await page.goto('https://tbepanel.com/');

    await page.type('#login', 'kampongsexi');
    await page.type('#password', 'kampong12');

    await Promise.all([
        page.click('#submit_btn'),
        await page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
}

function getPage() {
    return page;
}

function getBrowser() {
    return browser;
}

module.exports = { initializeBrowser, getPage, getBrowser };
