const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { populate } = require("./models/userModel");
const { get } = require("http");
let id = 1;

async function scraperJob() {
  // POST https://api.internsathi.com/graphql

  let finalData = [];

  let dataInternsathi = async () => {
    return await Internsathi();
  };
  let dataVocalPanda = async () => {
    return await VocalPanda();
  };
  finalData = [await dataInternsathi(), await dataVocalPanda()];
  if (
    fs.writeFileSync(
      path.join(__dirname, "..", "frontend", "Public", "jobListings.json"),
      JSON.stringify(finalData.flat(), null, 2),
      "utf-8",
      { flag: "wx" }
    )
  ) {
    getEstimatedSalary();
  }
}

async function Internsathi() {
  let data = await fetch("https://api.internsathi.com/graphql", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.8",
      "content-type": "application/json",
      priority: "u=1, i",
      "sec-ch-ua": '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      Referer: "https://internsathi.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: '{"query":"\\n  query getJobs($filter: FilterJobInput!, $input: GetJobsInput!) {\\n    getJobs(filter: $filter, input: $input) {\\n      currentPage\\n      lastPage\\n      nextPage\\n      prevPage\\n      totalCount\\n      result {\\n        jobId\\n        title\\n        cityName\\n        jobType\\n        jobLevel\\n        jobLocation\\n        jobStatus\\n        isApplied\\n        Questions {\\n          jobId\\n          question\\n          questionId\\n          isRequired\\n        }\\n        isFeatured\\n        Creator {\\n          profilePic\\n          profileURL\\n          userId\\n          companyName\\n          companyImages\\n          description\\n          Address {\\n            address\\n            cityName\\n            countryName\\n          }\\n        }\\n        Industry {\\n          Users {\\n            profilePic\\n          }\\n          industryName\\n        }\\n        AppliedUsers {\\n          isApplied\\n        }\\n        createdAt\\n        deadline\\n        opportunityType\\n        jobStatus\\n        description\\n        Tags {\\n          tagId\\n          tagName\\n        }\\n        Skills {\\n          skillId\\n          skillName\\n        }\\n        duration\\n        durationType\\n        experience\\n        experienceType\\n        noOfOpenings\\n        salaryType\\n        salaryMin\\n        salaryMax\\n        sectorName\\n        requirements\\n        responsibilities\\n        Qualifications {\\n          degreeId\\n          degreeName\\n        }\\n        slug\\n      }\\n    }\\n  }\\n","variables":{"filter":{"search":"","limit":500,"sort":null},"input":{"jobStatus":"OPEN","opportunityType":"JOB"}},"operationName":"getJobs"}',
    method: "POST",
  }).then(async (response) => {
    let jobListings = await response.json();
    let jobListingsData = jobListings.data.getJobs.result;
    //console.log(jobListingsData);
    jobListingsData = jobListingsData.filter(
      (job) =>
        job.deadline.split("T")[0] >= new Date().toISOString().split("T")[0]
    );
    let data = jobListingsData.map((job) => ({
      id: id++,
      companyName: job.Creator ? job.Creator.companyName : "N/A",
      jobTitle: job.title
        .split("-")
        .join(" ")
        .replace(/ID\d+/g, "")
        .trim()
        .replace(/\d+ID/g, "")
        .trim(),
      jobSector: job.sector,
      jobCategory: job.opportunityType || "N/A",
      jobLocation: job.jobLocation,
      jobSector: job.sectorName || "N/A",
      Location: job.cityName || "N/A",
      employmentType: job.jobType,
      minPrice: job.salaryMin || "N/A",
      maxPrice: job.salaryMax || "N/A",
      salaryType: job.salaryType || "N/A",
      experienceLevel: job.jobLevel || "N/A",
      availablePositions: job.noOfOpenings || 0,
      description: job.description || "N/A",
      requirements: job.requirements.replace("class", "className") || "N/A",
      expires: job.deadline.split("T")[0] || "N/A",
      created: job.createdAt.split("T")[0] || "N/A",
      responsibilities:
        job.responsibilities.replace("class", "className") || "N/A",
      frontendDescription:
        job.description
          .replace(/<\/?[^>]+(>|$)/g, "")
          .replace("class", "className")
          .split(".")
          .slice(0, 2)
          .join(".") || "N/A",
      url: `https://internsathi.com/internships/${job.slug}`,
      image: `https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F${
        job.Creator ? job.Creator.profilePic.split("/")[2] : "N/A"
      }&w=256&q=75`,
    }));

    return data;
  });

  //console.log(data);
  return data;
}

async function VocalPanda() {
  const getLocation = (location) => {
    // Split the address by comma
    const parts = location.split(", ");

    // If the address has both city and country
    if (parts.length === 2) {
      // Check if the second part is "nepal", return the first part
      if (parts[1].toLowerCase() === "nepal") {
        return parts[0];
      }
    }

    // Otherwise, return the first part of the address
    return parts[1];
  };

  let data = await fetch(
    "https://vocalpanda-prod-gvshg-a006ddd577b0.herokuapp.com/dashboard/getCategoryListWithJobCount",
    {
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.7",
        "sec-ch-ua":
          '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1",
      },
      referrer: "https://www.vocalpanda.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching category list:", error);
      return [];
    });
  const getSector = (category) => {
    let sector = data.category_list.flat();
    const data_to_find = sector.find((item) => String(item.id) === category);
    return data_to_find ? data_to_find.job_category_title : "N/A";
  };

  return await fetch(
    "https://vocalpanda-prod-gvshg-a006ddd577b0.herokuapp.com/api/getFindAJobMultipleSearchCriteria",
    {
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1",
        Referer: "https://www.vocalpanda.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: '{"slug":null,"id":0,"address_lat":"null","address_lng":"null","work_mode":"","job_type":"","experience":0,"job_location_lat_set":"","job_location_lng_set":"","job_category":"","job_title_set":"","education_degree_set":"","salary_from":0,"salary_to":0,"page_number":1,"page_size":100,"salary_type":null}',
      method: "POST",
    }
  )
    .then(async (response) => {
      // console.log(response);
      let jobListingsData = await response.json();
      jobListingsData = jobListingsData.response.job_list;
      // console.log(jobListingsData);
      //console.log(jobListingsData[0].logo);
      jobListingsData = jobListingsData.filter(
        (job) => job.deadline >= new Date().toISOString().split("T")[0]
      );
      const jobData = await jobListingsData.map((job) =>
        //console.log(job.logo),
        ({
          id: id++,
          companyName: job.first_name,
          jobTitle: job.job_title,
          jobCategory: job.is_remote === 0 ? "ONSITE" : "REMOTE",
          jobLocation: job.job_location,
          jobSector: `${getSector(job.job_category)}`,
          Location: getLocation(job.job_location),
          employmentType: job.job_type_name,
          minPrice: job.salary_from,
          maxPrice: job.salary_to,
          salaryType: job.offered_salary.toUpperCase(),
          experienceLevel: job.experience,
          availablePositions: job.req_no_of_employes,
          description: job.job_description,
          requirements: job.job_description,
          expires: job.deadline,
          created: job.created_date.split(" ")[0],
          responsibilities: job.job_description,
          frontendDescription: job.job_description
            .replace(/<\/?[^>]+(>|$)/g, "")
            .split(".")
            .slice(0, 2)
            .join("."),
          url: `https://www.vocalpanda.com/${job.job_title.toLowerCase()}-${
            job.job_id
          }`.replace(/ /g, "-"),
          image:
            `https://jobportal-prod-bucket.s3.amazonaws.com/uploads/portal/${job.logo}`.replace(
              / /g,
              "%20"
            ),
        })
      );
      return jobData;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

scraperJob();

module.exports = scraperJob;
