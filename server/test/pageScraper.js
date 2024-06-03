const fs = require('fs');
const { scrapeJobs } = require('./functions');
async function extractTitlesFromFile() {
    try {
        const titles = fs.readFileSync('titles.txt', 'utf-8').split('\n');
        return titles;
    } catch (error) {
        console.error('Error reading titles.txt:', error);
        return [];
    }
}

const scraperObject = {

    async scraper(browser) {
        let page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36');
        await page.setViewport({ width: 1366, height: 768 });
        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', {
                get: () => false,
            });
        });
        await page.evaluateOnNewDocument(() => {
            window.navigator.chrome = {
                runtime: {},
                // etc.
            };
        });
        await page.evaluateOnNewDocument(() => {
            const originalQuery = window.navigator.permissions.query;
            return window.navigator.permissions.query = (parameters) => (
                parameters.name === 'notifications' ?
                    Promise.resolve({ state: Notification.permission }) :
                    originalQuery(parameters)
            );
        });
        let titles_ = await extractTitlesFromFile();

        await scrapeJobs(page, titles_, browser);

        console.log("Closing the page...");
        await page.close();


    }
};

module.exports = { scraperObject };