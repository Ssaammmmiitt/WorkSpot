const fs = require('fs');
//const { searchInternsathiJobs, searchKumariJobs /*, searchKantipurJobs, searchMerorojgariJobs, searchMeroJobsJobs */ } = require('./functions');
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
        //await searchInternsathiJobs(title, page, data, urls);
        // await searchKantipurJobs(title, page, data, urls);
        // await searchMerorojgariJobs(title, page, data, urls);
        // await searchMeroJobsJobs(title, page, data, urls);
        //await searchKumariJobs(title, page, data, urls);



        // console.log(data);
        //console.log(urls);
        /*
                let page_ = await browser.newPage();
                let details = [];
        
                for (let url of urls) {
                    let jobDetails = await scrapeJobDetails(url, page_);
                    details.push(jobDetails);
                    fs.appendFileSync('jobDetails.txt', `job data: ${data.join('\n')}\ndetails: ${details.join('\n')}\nadditional urls: ${urls.join('\n')}\n\n`, 'utf-8');
                    details = [];
                }
                await page_.close();
        
                async function scrapeJobDetails(url, page_) {
                    try {
                        await page_.goto(url);
                        await page_.waitForSelector("body > main > section > section > div > main > div > div.w-full.flex-1 > div > div:nth-child(1) > div:nth-child(3)");
                        await page_.waitForSelector("body > main > section > section > div > main > div > div.w-full.flex-1 > div > div:nth-child(1) > div:nth-child(4)");
                        await page_.waitForSelector("body > main > section > section > div > main > div > div.w-full.flex-1 > div > div:nth-child(1) > div:nth-child(5)");
                        console.log("Found the selector...");
        
                        let data = await page_.evaluate(() => {
                            let data1 = Array.from(document.querySelectorAll("body > main > section > section > div > main > div > div.w-full.flex-1 > div > div:nth-child(1) > div:nth-child(3)")).map(element => element.textContent);
                            let data2 = Array.from(document.querySelectorAll("body > main > section > section > div > main > div > div.w-full.flex-1 > div > div:nth-child(1) > div:nth-child(4)")).map(element => element.textContent);
                            let data3 = Array.from(document.querySelectorAll("body > main > section > section > div > main > div > div.w-full.flex-1 > div > div:nth-child(1) > div:nth-child(5)")).map(element => element.textContent);
        
                            return [...data1, ...data2, ...data3];
                        });
        
                        return data;
        
                    } catch (error) {
                        console.error('Error scraping job details:', error);
                        return [];
                    }
                }
        */

        //console.log(details);
        console.log("Closing the page...");
        await page.close();


    }
};

module.exports = { scraperObject };