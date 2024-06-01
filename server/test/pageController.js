
const  pageScraper  = require('./pageScraper');
async function scrapeAll(browserInstance) {
    console.log(pageScraper);
    let browser;
    try {
        browser = await browserInstance;
       return await pageScraper.scraperObject.scraper(browser);

    }
    catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)