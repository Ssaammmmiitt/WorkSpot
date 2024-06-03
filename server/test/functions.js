// Description: This file contains the functions to scrape job details from various job portals.
const fs = require('fs');
const path = require('path');
const { encode } = require('punycode');
const puppeteer = require('puppeteer');
const { Array } = require('core-js');

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
        jobDetailDescription: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[4]/p[2]/div',
        jobDetailRequirement: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[5]/p[2]/div',
        jobApplyLink: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[6]/a',
    },
    {
        name: 'kumarijob',
        url: 'https://kumarijob.com/',
        searchUrl: 'https://kumarijob.com/search?keywords=',
        jobs: '.col-md-6 col-sm-6 mt-2',
        noJobs: '.row',
        jobDetailLink: 'div > ul > li.description__two--foot > span:nth-child(2) > a',
        jobTitle: '/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/div[1]/h1',
        jobDetail: '/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]',
        jobDescription: '/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/div[1]',
        jobRequirement: '/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/div[3]'
    },
    {
        name: 'kantipurjob',
        url: 'https://kantipurjob.com/',
        searchUrl: 'https://kantipurjob.com/searchjob?organization=&category=&industry=&level=&type=&availability=&education=&location=&title=',
        jobs: 'body > section.dashboard-section > div > div > div.col-md-9.col-sm-12.dashboard-section-right > div:nth-child(2) > div > div > div:nth-child(1)',
        noJobs: 'body > section.dashboard-section > div > div > div.col-md-9.col-sm-12.dashboard-section-right > div.company-info-blk.dashboard-bg-color.search-job-page.new-job-search-blk.clearfix > div > i',
        jobDetailLink: ' div > div:nth-child(1) > div > div.col-md-2.edit-job-search-btn.clearfix > a',
        jobTitle: '/html/body/section[2]/div/div[3]/div[1]/div[2]/div[1]',
        jobDetail: '/html/body/section[2]/div/div[3]/div[1]/div[2]/div[2]/table/tbody',
        jobDetailWorking: '/html/body/section[2]/div/div[3]/div[1]/div[2]/div[8]/div[2]',
        jobDetailDescription: '/html/body/section[2]/div/div[3]/div[1]/div[2]/div[3]/div[2]',
        jobDetailRequirement: '/html/body/section[2]/div/div[3]/div[1]/div[2]/div[6]/div[2]',
    },
    {
        name: 'jobjee',
        url: 'https://www.jobejee.com/',
        searchUrl: 'https://www.jobejee.com/job-search?q=',
        jobs: '.col-md-12 lg-box',
        noJobs: '.col-md-12 nodata',
        jobDetailLink: 'div.col-md-2 > div > div.col-md-12.nopadding.text-center > a',
        jobTitle: '/html/body/app-root/app-new-job-detail/div/div[2]/div[1]/div[1]/div[2]',
        jobDetail: '/html/body/app-root/app-new-job-detail/div/div[2]/div[1]/div[2]',
        jobDetailDescription: '/html/body/app-root/app-new-job-detail/div/div[2]/div[1]/div[5]',
        jobDetailRequirement: '/html/body/app-root/app-new-job-detail/div/div[2]/div[1]/div[4]',
    },
    {
        name: 'merojob',
        url: 'https://merojob.com/',
        searchUrl: 'https://merojob.com/search/?q=',
        jobs: '.row job-card text-center text-lg-left ml-2',
        noJobs: '.card-text',
        jobDetailLink: 'div.col-8.col-lg-9.col-md-9.pl-3.pl-md-0.text-left > h1 > a',
        jobTitle: '/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/h1',
        jobDetail: '/html/body/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div/div[2]',
        jobDetailWorking: '/html/body/main/section/section/div/main/div/div[1]/div/div[1]/div[3]/p[2]',
        jobCompanyDetails: '/html/body/div[6]/div[1]/div[1]/div[1]/div/div[2]/div/div[1]',
        jobDetailRequirement: '/html/body/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div/div[2]',
    }
];

async function scrapeJobs(page, titles = [], browser) {
    let details = [];
    const fronrEndDetailsFilePath = path.join(__dirname, 'frontendJobDetails.json');
    const detailsFilePath = path.join(__dirname, 'jobDetails.json');

    for (const portalConfig of jobPortals) {
        for (const title of titles) {

            const [scrapedUrls] = await searchJobs(page, portalConfig, title);
            const scrapedDetails = await Promise.all(scrapedUrls.map(async (url) => {
                const detailsPage = await browser.newPage();
                const jobDetails = await scrapeJobDetails(detailsPage, url, portalConfig, scrapedUrls);
                await detailsPage.close();
                return jobDetails;
            }));
            details.push(...scrapedDetails.flat());
        }

        let filteredDetails;
        if (portalConfig.name === 'internsathi') {
            filteredDetails = details.map(filterInternsathiJobDetails);
        } else if (portalConfig.name === 'kumarijob') {
            filteredDetails = details.map(filterKumariJobDetails);
        } else if (portalConfig.name === 'kantipurjob') {
            filteredDetails = details.map(filterKantipurJobDetails);
        } else if (portalConfig.name === 'jobjee') {
            filteredDetails = details.map(filterVocalPandaJobDetails);
        } else if (portalConfig.name === 'merojob') {
            filteredDetails = details.map(filterMeroJobJobDetails);
        }
        fs.writeFileSync(fronrEndDetailsFilePath, JSON.stringify(filteredDetails, null, 2));
        fs.writeFileSync(detailsFilePath, JSON.stringify(details, null, 2));
    }
    console.log('Job details saved to files.');
}

async function searchJobs(page, portal, title) {
    const url = portal.searchUrl + title;
    console.log(`Navigating to ${url}...`);

    try {
        await page.goto(url, { waitUntil: 'networkidle0' });
        console.log('Went to the page...');
        await page.setViewport({
            width: 1200,
            height: 800
        });
        async function autoScroll(page) {
            await page.evaluate(async () => {
                await new Promise((resolve) => {
                    var totalHeight = 0;
                    var distance = 100;
                    var timer = setInterval(() => {
                        var scrollHeight = document.body.scrollHeight;
                        window.scrollBy(0, distance);
                        totalHeight += distance;

                        if (totalHeight >= scrollHeight - window.innerHeight) {
                            clearInterval(timer);
                            resolve();
                        }
                    }, 100);
                });
            });
        }
        if (portal.name == 'kumarijob') {
            portal.jobs = 'cardone premium bg-white aos-init aos-animate';
            await autoScroll(page);
        }

        // Wait for the main frame to be fully loaded or a maximum of 5 seconds
        const jobFound = await page.evaluate((portal) => {
            const jobsElement = document.querySelector(portal.jobs);
            const noJobsElement = document.querySelector(portal.noJobs);
            return jobsElement && !noJobsElement;
        }, portal);

        if (!jobFound) {
            console.log('No jobs found...');
            return [[], []];
        }

        console.log('Main frame loaded...');
        await page.waitForSelector(portal.jobs);
        console.log('Found the selector...');

        const [scrapedUrls] = await page.evaluate((portal) => {
            const jobElements = document.querySelectorAll(portal.jobs); // Add the missing selector for document.querySelectorAll()
            const urls = [];
            for (const jobElement of jobElements) {
                const jobLink = jobElement.querySelector(portal.jobDetailLink);
                if (jobLink) {
                    urls.push(jobLink.href);
                }
            }
            return [urls];
        }, portal);

        return [scrapedUrls];
    } catch (error) {
        console.error('Error scraping jobs:', error);
        return [[], []];
    }
}

async function scrapeJobDetails(page, url, portal) {

    try {
        if (typeof url === 'string' && url !== null) {
            const sanitizedUrl = url.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
            const encodedUrl = encodeURI(sanitizedUrl);
            let details = null;

            if (url.includes('internsathi')) {
                details = await ScrapeInterSathiJobDetails(page, encodedUrl, portal);
            } else if (url.includes('kumarijob')) {
                details = await ScrapeKumariJobDetails(page, encodedUrl, portal);
            } else if (url.includes('kantipurjob')) {
                details = await ScrapeKantipurJobDetails(page, encodedUrl, portal);
            } else if (url.includes('jobjee')) {
                details = await ScrapeJobJeeJobDetails(page, encodedUrl, portal);
            } else if (url.includes('merojob')) {
                details = await ScrapeMeroJobJobDetails(page, encodedUrl, portal);
            }

            return details !== null ? details : [];
        } else {
            console.error('Invalid URL:', url);
            return null;
        }
    } catch (error) {
        console.error('Error scraping job details:', error);
        return null;

    }
}



function filterKumariJobDetails(jobDetails) {
    const filteredDetails = {
        id: 'Will be generated by the database',
        companyName: jobDetails.title.split(' - ')[1].trim(),
    }
}

function filterKantipurJobDetails(jobDetails) {

}

function filterVocalPandaJobDetails() {

}

function filterMeroJobJobDetails(page, url, portal) {

}

async function ScrapeInterSathiJobDetails(page, url, portal) {

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    console.log(`Navigating to ${url}...`);

    const { jobDetail, jobTitle, jobDetailDescription, jobDetailWorking, jobDetailRequirement } = portal;
    const details = await page.evaluate((jobDetail) => {
        const element = document.evaluate(jobDetail, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
        }
        console.log(alertText);
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
        console.log(alertText);
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


    return {
        title,
        details,
        description,
        requirements,
        workingDetails,
        url,
        imageSrc: issueSrcs
    };
}


async function ScrapeKumariJobDetails(page, url, portal) {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    console.log(`Navigating to ${url}...`);

    const { jobDetail, jobTitle, jobDescription, jobDetailRequirement } = portal;
    const details = await page.evaluate((jobDetail) => {
        const element = document.evaluate(jobDetail, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
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
        console.log(alertText);
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
        url,
    };
}

async function ScrapeKantipurJobDetails(page, url, portal) {

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    console.log(`Navigating to ${url}...`);
    console.log("let's goooooooo");

    const { jobDetail, jobTitle, jobDetailDescription, jobDetailWorking, jobDetailRequirement } = portal;
    const details = await page.evaluate((jobDetail) => {
        const element = document.evaluate(jobDetail, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
        }
        console.log(alertText);
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
        console.log(alertText);
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

    const workingDetails = await page.evaluate((jobDetailWorking) => {
        const element = document.evaluate(jobDetailWorking, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        console.log("Heading->", thisHeading);
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
        }
        return alertText;
    }, jobDetailWorking);

    console.log("working details", workingDetails);
    console.log("requirements", requirements);
    console.log("description", description);
    console.log("title", title);
    console.log("details", details);


    return {
        title,
        details,
        description,
        requirements,
        workingDetails,
        url,
    };
}

async function ScrapeJobJeeJobDetails(page, url, portal) {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    console.log(`Navigating to ${url}...`);

    const { jobDetail, jobTitle, jobDetailDescription, jobDetailRequirement } = portal;

    const details = await page.evaluate((jobDetail) => {
        const element = document.evaluate(jobDetail, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
        }
        console.log(alertText);
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
        console.log(alertText);
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
    const requirements = await page.evaluate((jobDetailRequirement) => {
        const element = document.evaluate(jobDetailRequirement, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
        }
        console.log(alertText);
        return alertText;
    }, jobDetailRequirement);

    return {
        title,
        details,
        description,
        requirements,
        url,
    };
}

async function ScrapeMeroJobJobDetails(page, url, portal) {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    console.log(`Navigating to ${url}...`);

    const { jobDetail, jobTitle, jobDetailDescription, jobCompanyDetails, jobDetailRequirement } = portal;
    const details = await page.evaluate((jobDetail) => {
        const element = document.evaluate(jobDetail, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
        }
        console.log(alertText);
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
        console.log(alertText);
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

    const CompanyDetails = await page.evaluate((jobCompanyDetails) => {
        const element = document.evaluate(jobCompanyDetails, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
        }
        return alertText;
    }, jobCompanyDetails);

    const requirements = await page.evaluate((jobDetailRequirement) => {
        const element = document.evaluate(jobDetailRequirement, document.body, null, XPathResult.ANY_TYPE, null);
        let thisHeading = element.iterateNext();
        let alertText = "";
        while (thisHeading) {
            alertText += `${thisHeading.textContent}\n`;
            thisHeading = element.iterateNext();
        }
        console.log(alertText);
        return alertText;
    }, jobDetailRequirement);
    return {
        title,
        details,
        description,
        requirements,
        CompanyDetails,
        url,
    };

}

function filterInternsathiJobDetails(jobDetails) {
    // Check if jobDetails is not an object or undefined
    if (typeof jobDetails !== 'object' || !jobDetails) {
        console.error('Invalid job details provided.');
        return {}; // Return an empty object or handle the error as per your requirement
    }

    // Split jobDetails to extract job title, company name, location, and employment type
    const [jobPart, companyLocationEmploymentPart] = jobDetails.title.split('-ID');

    // Extract job title
    const jobTitle = jobPart.trim();

    // Extract company name, location, and employment type
    let companyName = 'Unknown';
    let location = 'Unknown';
    let employmentType = 'Unknown';

    if (companyLocationEmploymentPart) {
        const parts = companyLocationEmploymentPart.trim().split(' ');
        if (parts.length >= 3) {
            companyName = parts[0];
            location = parts[1];
            employmentType = parts.slice(2).join(' ');
        }
    }

    // Remove any leading numbers from the company name
    const cleanedCompanyName = companyName.replace(/^\d+/, '');

    // Create and return filteredDetails object
    const filteredDetails = {
        id: 'Will be generated by the database',
        companyName: cleanedCompanyName || 'Unknown',
        jobTitle: jobTitle || 'Unknown',
        jobLocation: location || 'Unknown',
        employmentType: employmentType || 'Unknown',
        minPrice: jobDetails.details ? (jobDetails.details.match(/Rs (\d+)/)?.[1] || 'Not specified') : 'Not specified',
        maxPrice: jobDetails.details ? (jobDetails.details.match(/- (\d+)/)?.[1] || 'Not specified') : 'Not specified',
        salaryType: jobDetails.details && jobDetails.details.includes('Monthly') ? 'Monthly' : 'Not specified',
        experienceLevel: jobDetails.details && (
            jobDetails.details.includes('Mid') ? 'Mid' :
                jobDetails.details.includes('Senior') ? 'Senior' :
                    jobDetails.details.includes('Junior') ? 'Junior' :
                        'Any experience'
        ),
        description: jobDetails.description
            ? jobDetails.description.match(/^(?:[^.!?]+[.!?]){1,2}/)
                ?.[0].replace(/\n{2,}/g, '\n\n').trim()
            : 'No description available'
    };

    return filteredDetails;
}

function loadJson() {
    const detailsFilePath = path.join(__dirname, 'jobDetails.json');
    const data = fs.readFileSync(detailsFilePath, 'utf-8');
    return JSON.parse(data);
}

let data = loadJson();
data = data.map(filterInternsathiJobDetails);
fs.writeFileSync('frontendJobDetails.json', JSON.stringify(data, null, 2));

module.exports = { scrapeJobs };