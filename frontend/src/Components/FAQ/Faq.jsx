import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";


const FAQ = () => {
  return (
<div className=" mx-auto w-[90%] max-w px-8 py-10 mt-7 bg-white rounded-lg shadow-sm border-2 border-Primary"> 
    <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-5xl font-bold text-Text">FAQ</h2>
            <p className="mt-3 text-2xl text-Text ">Frequenty asked questions

            </p>
        </div>
  <details className="group rounded-lg bg-gray-50 p-6 mt-7  hover:bg-Primary" open>
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-Text">
      <h2 className=" font-bold">What is WorkSpot?</h2>

      <span className="relative size-5 shrink-0">
        <AiOutlinePlusCircle className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />

        < AiOutlineMinusCircle className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
        </span>
    </summary>

    <p className="mt-4 leading-relaxed text-Text" >
    WorkSpot is an innovative web application designed to simplify and enhance the job-searching process. By leveraging advanced web-scraping technologies, WorkSpot gathers job listings from a wide range of websites, including LinkedIn, Upwork, Glassdoor, and many individual company career pages. This allows job seekers to access a comprehensive database of job opportunities all in one place, saving them time and effort.    </p>
  </details>

  <details className="group rounded-lg bg-gray-50 p-6 mt-7 hover:bg-Primary">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-Text">
      <h2 className="font-bold">How does WorkSpot work?</h2>

        <span className="relative size-5 shrink-0">
            <AiOutlinePlusCircle className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
            < AiOutlineMinusCircle className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
        </span>
    </summary>

    <p className="mt-4 leading-relaxed text-Text">
    WorkSpot operates by using a sophisticated web-scraping tool that continuously scans multiple job boards and company career pages for new job postings. The tool collects and organizes these listings into a centralized platform, providing users with an easy-to-navigate interface to search and filter through various job opportunities. This aggregation of job data ensures that users have access to the latest and most relevant job listings without needing to visit multiple websites.
</p>
  </details>

   <details className="group rounded-lg bg-gray-50 p-6 mt-7  hover:bg-Primary">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-Text">
      <h2 className="font-bold">Is WorkSpot free to use?</h2>

        <span className="relative size-5 shrink-0">
            <AiOutlinePlusCircle className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
            < AiOutlineMinusCircle className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
        </span>
    </summary>

    <p className="mt-4 leading-relaxed text-Text">
    Yes, WorkSpot is completely free for users. Our goal is to make the job-searching process as accessible and efficient as possible. There are no hidden fees or premium subscriptions required to access the full range of features and job listings on our platform.
    </p>
  </details>

   <details className="group rounded-lg bg-gray-50 p-6 mt-7  hover:bg-Primary">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-Text">
      <h2 className="font-bold">How often are job listings updated on WorkSpot?</h2>

        <span className="relative size-5 shrink-0">
            <AiOutlinePlusCircle className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
            < AiOutlineMinusCircle className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
        </span>
    </summary>

    <p className="mt-4 leading-relaxed text-Text">
    Job listings on WorkSpot are updated regularly to provide users with the most current opportunities. The web-scraping tool runs at frequent intervals, continuously adding new job postings and removing those that are no longer available. This ensures that users always have access to fresh and relevant job listings.
    </p>
  </details>

   <details className="group rounded-lg bg-gray-50 p-6 mt-7  hover:bg-Primary">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-Text">
      <h2 className="font-bold">Do I need to create an account to use WorkSpot?</h2>

        <span className="relative size-5 shrink-0">
            <AiOutlinePlusCircle className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
            < AiOutlineMinusCircle className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
        </span>
    </summary>

    <p className="mt-4 leading-relaxed text-Text">
    No, creating an account is not mandatory to browse job listings on WorkSpot. However, registering for an account unlocks additional features, such as saving job searches, receiving personalized job alerts, and bookmarking favorite listings for easy access later.
    </p>
  </details>

   <details className="group rounded-lg bg-gray-50 p-6 mt-7  hover:bg-Primary">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-Text">
      <h2 className="font-bold">Can I filter job listings by location and job type?</h2>

        <span className="relative size-5 shrink-0">
            <AiOutlinePlusCircle className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 " />
            < AiOutlineMinusCircle className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
        </span>
    </summary>

    <p className="mt-4 leading-relaxed text-Text bg-">
    Yes, WorkSpot offers robust filtering options to help users find the most relevant job opportunities. Users can filter job listings by location, job type, industry, company, and more. These filters are designed to narrow down search results and make the job-hunting process more efficient.
    </p>
  </details>

   <details className="group rounded-lg bg-gray-50 p-6 mt-7  hover:bg-Primary">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-Text">
      <h2 className="font-bold">Will WorkSpot share my personal information with employers?</h2>

        <span className="relative size-5 shrink-0">
            <AiOutlinePlusCircle className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
            < AiOutlineMinusCircle className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
        </span>
    </summary>

    <p className="mt-4 leading-relaxed text-Text">
    No, WorkSpot values user privacy and does not share personal information with employers. The platform functions as an aggregator of job listings and does not collect or distribute personal data. Users apply for jobs directly through the original listing’s website, ensuring their information remains secure.
    </p>
  </details>

   <details className="group rounded-lg bg-gray-50 p-6 mt-7  hover:bg-Primary">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-Text">
      <h2 className="font-bold">Is there a mobile app for WorkSpot?</h2>

        <span className="relative size-5 shrink-0">
            <AiOutlinePlusCircle className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" />
            < AiOutlineMinusCircle className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" />
        </span>
    </summary>

    <p className="mt-4 leading-relaxed text-Text">
    Currently, WorkSpot is available as a web application optimized for mobile browsing. This means users can access the platform from any device with a web browser, enjoying a seamless experience on both desktop and mobile. A dedicated mobile app is in development and will be released soon to further enhance user convenience.
    </p>
  </details>

</div>
  );
};

export default FAQ;