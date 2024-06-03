const fs = require('fs');
const browserObject = require('./browser'); // Fix the case of the file name
const scraperController = require('./pageController'); // Fix the case of the file name

async function scraper() {
    //Start the browser and create a browser instance
    let browserInstance = browserObject.startBrowser();

    // Pass the browser instance to the scraper controller
    scraperController(browserInstance);

    // read from the file that contains the jobs
    async function extractJobsFromFile() {
        try {
            const details = fs.readFileSync('jobDetails.json', 'utf-8').split('\n');
            return details;
        } catch (error) {
            console.error('Error reading titles.txt:', error);
            return [];
        }
    }
    const extractedJobs = extractJobsFromFile();
    return extractedJobs;
}

scraper()

module.exports = scraper;


