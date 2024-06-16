const fs = require('fs');
const path = require('path');

const fileData = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'Public', 'jobListings.json'));
const jobListings = JSON.parse(fileData);

function getEstimatedSalary() {
    let salary_by_job = {};
    jobListings.map((job) => {
        const max = parseInt(job.maxPrice);
        const min = parseInt(job.minPrice);
        const salary = (max + min) / 2;
        if (salary !== 0 && salary) {
            //console.log(salary);
            if (salary_by_job[job.jobSector]) {
                const existingSalary = salary_by_job[job.jobSector];
                const updatedSalary = (existingSalary + salary) / 2;
                //console.log(updatedSalary);
                salary_by_job[job.jobSector] = parseInt(updatedSalary);
            } else {
                salary_by_job[job.jobSector] = salary;
            }
        }
        // Check for duplicates
        console.log(job);
        const jobSectors = job.jobSector.toLowerCase();
        const existingjobSectors = Object.keys(salary_by_job).map(title => title.toLowerCase());
        const isDuplicate = existingjobSectors.includes(jobSectors);

        if (!salary && isDuplicate && salary !== 0) {
            const existingSalary = salary_by_job[job.jobSector];
            if (existingSalary && existingSalary !== 0) {
                const updatedSalary = parseInt((existingSalary + salary) / 2);
                if (updatedSalary && updatedSalary !== 0) {
                    salary_by_job[job.jobSector] = updatedSalary;
                }
            }
        }
        //console.log(salary_by_job);
    });
    let FinalData = [];
    let id = 1;
    console.log(salary_by_job);
    for (let sector in salary_by_job) {
        salary_by_job[sector] = Math.ceil(salary_by_job[sector] / 1000) * 1000;
        FinalData.push(({

            id: id++,
            "title": sector,
            "salary": salary_by_job[sector],
            "currency": "NPR",
            "skills": [],

        }));
        console.log(FinalData);
    }
    console.log(FinalData);
    FinalData = JSON.stringify(FinalData, null, 2);
    fs.writeFileSync(path.join(__dirname, '..', 'frontend', 'Public', 'salaries.json'), FinalData);
}
//getEstimatedSalary()
module.exports = getEstimatedSalary;
