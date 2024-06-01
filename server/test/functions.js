// Description: This file contains the functions to scrape job details from various job portals.
const fs = require('fs');
const path = require('path');
const { encode } = require('punycode');
const puppeteer = require('puppeteer');



const jobPortals = [
    {
        name: 'internsathi',
        url: 'https://internsathi.com/',
        searchUrl: 'https://internsathi.com/jobs?q=',
        jobs: ".w-full",
        noJobs: ".text-lg text-gray-700 font-medium text-center",
        jobDetailLink: 'div > div.mt-3.flex.flex-col.gap-3 > div > a',
        jobTitle: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[1]/div/div[1]/div',
        jobDetail: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[2]',
        jobDetailWorking: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[3]/p[2]',
        jobDetailDescription: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[5]/p[2]/div',
        jobDetailRequirement: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[4]/p[2]/div',
    },/*
    {
        name: 'kumarijob',
        url: 'https://kumarijob.com/',
        searchUrl: 'https://kumarijob.com/search?keywords=',
        jobs: /*'body > div:nth-child(4) > div > div > div:nth-child(3) > div > div > div.col-md-9 > div.outline__container.mt-3 > div.row.py-2.px-md-3.px-1.px-md-1 > div > div > div',
        noJobs:/* 'body > div:nth-child(4) > div > div > div:nth-child(3) > div > div > div.col-md-9 > div.outline__container.mt-3 > div > div > div',
        jobDetailLink: 'div > div.mt-3.flex.flex-col.gap-3 > div > a',
        jobTitle: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[1]/div/div[1]/div',
        jobDetail: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[2]',
        jobDetailWorking: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[3]/p[2]',
        jobDetailDescription: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[5]/p[2]/div',
        jobDetailRequirement: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[4]/p[2]/div',
    },
    {
        name: 'kantipurjob',
        url: 'https://kantipurjob.com/',
        searchUrl: 'https://kantipurjob.com/searchjob?title=&category=',
        jobs:'.col-md-12',
        noJobs: 'body > section.dashboard-section > div > div > div.col-md-9.col-sm-12.dashboard-section-right > div:nth-child(2)',
       jobDetailLink: 'div > div.mt-3.flex.flex-col.gap-3 > div > a',
        jobTitle: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[1]/div/div[1]/div',
        jobDetail: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[2]',
        jobDetailWorking: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[3]/p[2]',
        jobDetailDescription: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[5]/p[2]/div',
        jobDetailRequirement: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[4]/p[2]/div',
     },
    {
        name: 'merorojgari',
        url: 'https://merorojgari.com/',
        searchUrl: 'https://merorojgari.com/',
        jobs: /*'body > div > div > ul',
        jobs class ->  '.card mt-3 hover-shadow',
        no jobs class->'.card-text',
        jobDetailLink: 'div > div.mt-3.flex.flex-col.gap-3 > div > a',
        jobTitle: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[1]/div/div[1]/div',
        jobDetail: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[2]',
        jobDetailWorking: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[3]/p[2]',
        jobDetailDescription: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[5]/p[2]/div',
        jobDetailRequirement: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[4]/p[2]/div',
    },
    {
        name: 'merojob',
        url: 'https://merojob.com/',
        searchUrl: 'https://merojob.com/search/?q=',
        jobs: '#search_job > div:nth-child(2)',
        noJobs: '//*[@id="search_job"]/div[1]/div/div/h4/text()',
        jobDetailLink: 'div > div.mt-3.flex.flex-col.gap-3 > div > a',
        jobTitle: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[1]/div/div[1]/div',
        jobDetail: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[2]',
        jobDetailWorking: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[3]/p[2]',
        jobDetailDescription: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[5]/p[2]/div',
        jobDetailRequirement: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[4]/p[2]/div',
    }*/
];

async function scrapeJobs(page, titles = [], browser) {
    const details = [];

    for (const portalConfig of jobPortals) {
        for (const title of titles) {
            const { searchUrl, jobs, noJobs, jobDetail, jobTitle, jobDetailLink, jobDetailDescription, jobDetailWorking, jobDetailRequirement } = portalConfig;
            const [scrapedUrls] = await searchJobs(page, searchUrl, title, jobs, noJobs, jobDetailLink);

            const scrapedDetails = await Promise.all(scrapedUrls.map(async (url) => {
                const detailsPage = await browser.newPage();
                const jobDetails = await scrapeJobDetails(detailsPage, url, jobTitle, jobDetail, jobDetailDescription, jobDetailWorking, jobDetailRequirement);
                await detailsPage.close();
                return jobDetails;
            }));

            details.push(...scrapedDetails.flat());
        }
    }

    const detailsFilePath = path.join(__dirname, 'jobDetails.json');

    fs.writeFileSync(detailsFilePath, JSON.stringify(details, null, 2));

    console.log('Job details saved to files.');
}

async function searchJobs(page, searchUrl, title, jobsSelector, noJobsSelector, jobDetailLink) {
    const url = searchUrl + title;
    console.log(`Navigating to ${url}...`);

    try {
        await page.goto(url, { waitUntil: 'networkidle0' });
        console.log('Went to the page...');

        // Wait for the main frame to be fully loaded or a maximum of 5 seconds
        const selectorPromise = new Promise((resolve, reject) => {
            const checkSelectors = async () => {
                const jobsElement = await page.$(jobsSelector);
                const noJobsElement = await page.$(noJobsSelector);

                if (jobsElement || noJobsElement) {
                    resolve();
                } else {
                    setTimeout(checkSelectors, 100); // Check again after 100ms
                }
            };

            const timeout = setTimeout(() => {
                reject(new Error('Timeout waiting for selectors'));
            }, 5000); // 5 seconds

            checkSelectors();
        });

        await selectorPromise;

        console.log('Main frame loaded...');



        const jobFound = await page.evaluate((jobsSelector, noJobsSelector) => {

            const jobsElement = document.querySelector(jobsSelector);
            const noJobsElement = document.querySelector(noJobsSelector);
            return jobsElement && !noJobsElement;
        }, jobsSelector, noJobsSelector);

        if (!jobFound) {
            console.log('No jobs found...');
            return [[], []];
        }

        await page.waitForSelector(jobsSelector);
        console.log('Found the selector...');

        const [scrapedData, scrapedUrls] = await page.evaluate((jobsSelector, jobDetailLink) => {
            const jobElements = document.querySelectorAll(jobsSelector);
            const urls = [];
            for (const jobElement of jobElements) {
                const jobLink = jobElement.querySelector(jobDetailLink);
                if (jobLink) {
                    urls.push(jobLink.href);
                }
            }
            return [urls];
        }, jobsSelector, jobDetailLink);

        return [scrapedData, scrapedUrls];
    } catch (error) {
        console.error('Error scraping jobs:', error);
        return [[], []];
    }
}

async function scrapeJobDetails(page, url, jobTitle, jobDetail, jobDetailDescription, jobDetailWorking, jobDetailRequirement) {
    try {
        if (typeof url === 'string' && url !== null) {
            const sanitizedUrl = url.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
            const encodedUrl = encodeURI(sanitizedUrl);

            await page.goto(encodedUrl, { waitUntil: 'networkidle0', timeout: 60000 });
            console.log(`Navigating to ${encodedUrl}...`);

            //document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
            const details = await page.evaluate((jobDetail) => {
                const details = document.evaluate(jobDetail, document.body, null, XPathResult.ANY_TYPE, null);
                let thisHeading = details.iterateNext();
                let alertText = "";
                while (thisHeading) {
                    alertText += `${thisHeading.textContent}\n`;
                    thisHeading = details.iterateNext();
                }
                return alertText;
            }, jobDetail);

            const title = await page.evaluate((jobTitle) => {
                const element = document.evaluate(jobTitle, document.body, null, XPathResult.ANY_TYPE, null);
                let thisHeading = element.iterateNext();
                let alertText = "";
                while (thisHeading) {
                    alertText += `${thisHeading.textContent}\n`;
                    thisHeading = element.iterateNext();
                }

                return alertText;
            }, jobTitle);

            const description = await page.evaluate((jobDetailDescription) => {
                const element = document.evaluate(jobDetailDescription, document.body, null, XPathResult.ANY_TYPE, null);
                let thisHeading = element.iterateNext();
                let alertText = "";
                while (thisHeading) {
                    alertText += `${thisHeading.textContent}\n`;
                    thisHeading = element.iterateNext();
                }
                return alertText;
            }, jobDetailDescription);

            const workingDetails = await page.evaluate((jobDetailWorking) => {
                const element = document.evaluate(jobDetailWorking, document.body, null, XPathResult.ANY_TYPE, null);
                let thisHeading = element.iterateNext();
                let alertText = "";
                while (thisHeading) {
                    alertText += `${thisHeading.textContent}\n`;
                    thisHeading = element.iterateNext();
                }
                return alertText;
            }, jobDetailWorking);

            const requirements = await page.evaluate((jobDetailRequirement) => {
                const element = document.evaluate(jobDetailRequirement, document.body, null, XPathResult.ANY_TYPE, null);
                let thisHeading = element.iterateNext();
                let alertText = "";
                while (thisHeading) {
                    alertText += `${thisHeading.textContent}\n`;
                    thisHeading = element.iterateNext();
                }
                return alertText;
            }, jobDetailRequirement);

            return {
                title,
                details,
                description,
                requirements,
                workingDetails,
            };

        } else {
            console.error('Invalid URL:', url);
            return null;
        }
    } catch (error) {
        console.error('Error scraping job details:', error);
        return null;

    }
}
module.exports = { scrapeJobs };