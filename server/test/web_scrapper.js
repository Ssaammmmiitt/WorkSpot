const fs = require('fs');
const scraperController = require('./pageController'); // Fix the case of the file name

const axios = require('axios');
const { query } = require('express');
const cheerio = require('cheerio');
const { Console } = require('console');

const JobPortals = [{
    name: "Internsathi",
    url: "https://api.internsathi.com/graphql",
    query: `
    query getJobs($filter: FilterJobInput!, $input: GetJobsInput!) {\n    getJobs(filter: $filter, input: $input) {\n      currentPage\n      lastPage\n      nextPage\n      prevPage\n      totalCount\n      result {\n        jobId\n        title\n        cityName\n        jobType\n        jobLevel\n        jobLocation\n        jobStatus\n        isApplied\n        Questions {\n          jobId\n          question\n          questionId\n          isRequired\n        }\n        isFeatured\n        Creator {\n          profilePic\n          profileURL\n          userId\n          companyName\n          companyImages\n          description\n          Address {\n            address\n            cityName\n            countryName\n          }\n        }\n        Industry {\n          Users {\n            profilePic\n          }\n          industryName\n        }\n        AppliedUsers {\n          isApplied\n        }\n        createdAt\n        deadline\n        opportunityType\n        jobStatus\n        description\n        Tags {\n          tagId\n          tagName\n        }\n        Skills {\n          skillId\n          skillName\n        }\n        duration\n        durationType\n        experience\n        experienceType\n        noOfOpenings\n        salaryType\n        salaryMin\n        salaryMax\n        sectorName\n        requirements\n        responsibilities\n        Qualifications {\n          degreeId\n          degreeName\n        }\n        slug\n      }\n    }\n  }
    `,
    variables: {
        "filter": {},
        "input": {
        }
    }
}, {
    /**
     * 
     */
    name: "VocalPanda",
    url: "https://vocalpanda-prod-gvshg-a006ddd577b0.herokuapp.com/graphql",
    query: `
    query getJobs($pageNumber: Int!, $pageSize: Int!, $filter: JobFilterInput!) {
        jobs(
            pageNumber: $pageNumber,
            pageSize: $pageSize,
            filter: $filter
        ) {
            address_lat
            address_lng
            education_degree_set
            experience
            id
            job_category
            job_location_lat_set
            job_location_lng_set
            job_title_set
            job_type
            salary_from
            salary_to
            salary_type
            slug
            work_mode
        }
    }
    `,
    variables: {
        "pageNumber": 1,
        "pageSize": 100,
        "filter": {
            "address_lat": null,
            "address_lng": null,
            "education_degree_set": "",
            "experience": 0,
            "job_category": "",
            "job_location_lat_set": "",
            "job_location_lng_set": "",
            "job_title_set": "",
            "job_type": "",
            "salary_from": 0,
            "salary_to": 0,
            "salary_type": null,
            "slug": null,
            "work_mode": ""
        }
    }

}
];

async function extractTitlesFromFile() {
    try {
        const titles = fs.readFileSync(__dirname, 'titles.txt', 'utf-8').split('\n');
        return titles;
    } catch (error) {
        console.error('Error reading titles.txt:', error);
        return [];
    }
}


async function scraperJob() {
    // POST https://api.internsathi.com/graphql

    let finalData = [];

    let dataInternsathi = await Internsathi();
    let dataVocalPanda = await VocalPanda();

    // console.log("Scraper->", dataInternsathi);
    // console.log("Scraper->", dataVocalPanda);


    finalData.push(dataInternsathi);
    finalData.push(dataVocalPanda);

    fs.writeFileSync('jobListings.json', JSON.stringify(finalData, null, 2), 'utf-8');
    let jobDetails = finalData.map(data => {
        // If it's an array, flatten it and map over each job object
        return data.flat().map(job => ({
            companyName: job.companyName,
            jobTitle: job.jobTitle,
            jobLocation: job.jobLocation,
            employmentType: job.employmentType,
            minPrice: job.minPrice,
            maxPrice: job.maxPrice,
            salaryType: job.salaryType,
            experienceLevel: job.experienceLevel,
            description: job.description ? job.description.split('.').slice(0, 3).join('. ') : "N/A" // Check if description exists before splitting
        }));

    });

    fs.writeFileSync('frontendJobDetails.json', JSON.stringify(jobDetails, null, 2), 'utf-8');



}


async function Internsathi() {
    let url = "https://api.internsathi.com/graphql";
    let query = JobPortals[0].query;
    let variables = JobPortals[0].variables;
    let data = //await axios({
        //     method: 'POST',
        //     url: url,
        //     data: {
        //         "query": query,
        //         "variables": variables
        //     },
        //     headers: { 'Content-Type': 'application/json' }

        // }).then((response) => {
        //     let jobListings = response.data.data.getJobs.result;

        //     let data = jobListings.map(job => ({
        //         companyName: job.Creator ? job.Creator.companyName : "N/A",
        //         jobTitle: job.title,
        //         jobLocation: (job.jobLocation),
        //         employmentType: (job.jobType),
        //         minPrice: job.salaryMin || "N/A",
        //         maxPrice: job.salaryMax || "N/A",
        //         salaryType: job.salaryType || "N/A",
        //         experienceLevel: (job.jobLevel || "N/A"),
        //         description: (job.description || "N/A").trim(),
        //         requirements: job.requirements.trim(),
        //         responsibilities: job.responsibilities.trim(),
        //         url: `https://internsathi.com/internships/${job.slug}`

        //     }));
        //     return data;
        // });

        await fetch("https://api.internsathi.com/graphql", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.8",
                "content-type": "application/json",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "sec-gpc": "1",
                "Referer": "https://internsathi.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "{\"query\":\"\\n  query getJobs($filter: FilterJobInput!, $input: GetJobsInput!) {\\n    getJobs(filter: $filter, input: $input) {\\n      currentPage\\n      lastPage\\n      nextPage\\n      prevPage\\n      totalCount\\n      result {\\n        jobId\\n        title\\n        cityName\\n        jobType\\n        jobLevel\\n        jobLocation\\n        jobStatus\\n        isApplied\\n        Questions {\\n          jobId\\n          question\\n          questionId\\n          isRequired\\n        }\\n        isFeatured\\n        Creator {\\n          profilePic\\n          profileURL\\n          userId\\n          companyName\\n          companyImages\\n          description\\n          Address {\\n            address\\n            cityName\\n            countryName\\n          }\\n        }\\n        Industry {\\n          Users {\\n            profilePic\\n          }\\n          industryName\\n        }\\n        AppliedUsers {\\n          isApplied\\n        }\\n        createdAt\\n        deadline\\n        opportunityType\\n        jobStatus\\n        description\\n        Tags {\\n          tagId\\n          tagName\\n        }\\n        Skills {\\n          skillId\\n          skillName\\n        }\\n        duration\\n        durationType\\n        experience\\n        experienceType\\n        noOfOpenings\\n        salaryType\\n        salaryMin\\n        salaryMax\\n        sectorName\\n        requirements\\n        responsibilities\\n        Qualifications {\\n          degreeId\\n          degreeName\\n        }\\n        slug\\n      }\\n    }\\n  }\\n\",\"variables\":{\"filter\":{\"search\":\"\",\"limit\":500,\"sort\":null},\"input\":{\"jobStatus\":\"OPEN\",\"opportunityType\":\"JOB\"}},\"operationName\":\"getJobs\"}",
            "method": "POST"
        }).then(async (response) => {

            let jobListings = await response.json();
            let jobListingsData = jobListings.data.getJobs.result;
            console.log(jobListingsData);

            let data = jobListingsData.map(job => ({
                companyName: job.Creator ? job.Creator.companyName : "N/A",
                jobTitle: job.title,
                jobLocation: (job.jobLocation),
                employmentType: (job.jobType),
                minPrice: job.salaryMin || "N/A",
                maxPrice: job.salaryMax || "N/A",
                salaryType: job.salaryType || "N/A",
                experienceLevel: (job.jobLevel || "N/A"),
                description: (job.description || "N/A").trim(),
                requirements: job.requirements.trim(),
                responsibilities: job.responsibilities.trim(),
                url: `https://internsathi.com/internships/${job.slug}`

            }));
            return data;
        });

    for (let i = 0; i < data.length; i++) {
        await scrapeImageUrl(data[i].url)
            .then(imageUrl => {
                if (imageUrl) {
                    data[i].imageUrl = 'https://www.internsathi.com/' + imageUrl;
                }
            });
    }


    //console.log(data);
    return data;

}

async function VocalPanda() {


    return await fetch("https://vocalpanda-prod-gvshg-a006ddd577b0.herokuapp.com/api/getFindAJobMultipleSearchCriteria", {
        "headers": {
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "sec-gpc": "1",
            "Referer": "https://www.vocalpanda.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"slug\":null,\"id\":0,\"address_lat\":\"null\",\"address_lng\":\"null\",\"work_mode\":\"\",\"job_type\":\"\",\"experience\":0,\"job_location_lat_set\":\"\",\"job_location_lng_set\":\"\",\"job_category\":\"\",\"job_title_set\":\"\",\"education_degree_set\":\"\",\"salary_from\":0,\"salary_to\":0,\"page_number\":1,\"page_size\":100,\"salary_type\":null}",
        "method": "POST"
    }).then(async response => {

        // console.log(response);
        let jobListingsData = await response.json();
        console.log(jobListingsData);
        let jobData = jobListingsData.response.job_list.map(job => ({
            companyName: job.first_name.trim(),
            jobTitle: job.job_title.trim(),
            jobLocation: job.job_location.trim(),
            employmentType: job.job_type_name.trim(),
            minPrice: job.salary_from || "N/A",
            maxPrice: job.salary_to || "N/A",
            salaryType: job.offered_salary || "N/A",
            experienceLevel: job.experience || "N/A",
            description: job.job_description || "N/A".trim(),
            url: `https://vocalpanda.com/${job.job_title.split(' ').join('-').toLowerCase()}-${job.job_id}`
        }));
        return jobData;
    }).catch(error => {
        console.error('Error:', error);
    });

}

async function scrapeImageUrl(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Replace with the actual selector for the image on the webpage
        const imageSelector = $('body > main > section > section > div > main > div > div.w-full.flex-1 > div > div:nth-child(1) > div.border-b.border-gray-100.pb-6 > div > div.flex.items-center.gap-4 > img');

        if (imageSelector.attr('src') || imageSelector.attr('srcset')) {
            const imageUrl = imageSelector.attr('src') || imageSelector.attr('srcset');
            console.log('Image URL extracted:', imageUrl);
            return imageUrl;
        } else {
            console.warn('Image not found on the webpage or src attribute is missing');
        }
    } catch (error) {
        console.error('Error fetching image URL:', error);
    }

    // Handle cases where image URL isn't found or an error occurs (optional)
    return null;
}



scraperJob()

module.exports = scraperJob;


