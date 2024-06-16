import React, { useEffect, useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db_firebase } from "../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../firebase/AuthProvider";
import { set } from "react-hook-form";

const Profile = () => {
  const { user, logout } = useAuth();
  const [users, setUser] = useState(null);
  // const [photoUrl, setPhotoUrl] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [displayName, setDisplayName] = useState("");
  const [data, setData] = useState({}); //firebase data
  const [dataS, setDatas] = useState({}); //social data
  const [social, setSocial] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          console.log(db_firebase);
          const userDoc = await getDocs(collection(db_firebase, "users"));
          console.log(userDoc);
          let data1 = userDoc.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          data1 = data1.filter((doc) => doc.id === user.uid);
          console.log(data1);
          console.log(data1[0]);
          console.log(data);
          data1 = data1[0];
          setData(data1);
          //setJobs(data.job_id);
          console.log(data);
          if (user.providerData[0].providerId === "password") {
            setSocial(false);
          } else {
            if (
              user.providerData[0].providerId === "google.com" ||
              user.providerData[0].providerId === "github.com"
            ) {
              const result = getAuth().currentUser;
              console.log(result);
              setDatas(result);
              if (result.displayName !== null && result.photoURL !== null) {
                setSocial(true);
                console.log(dataS);
              }
            }
          }
        }
      });

      return unsubscribe;
    };

    getJobs();
  }, []);

//   return (
//     <div className="max-w-4xl flex items-center justify-left h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
//       {/*<!--Main Col-- */}
//       <div
//         id="profile"
//         className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white  mx-6 lg:mx-0"
//       >
//         <div className="p-4 md:p-12 text-center lg:text-left">
//           {/*<!-- Image for mobile view--> */}
//           <img
//             src={social ? dataS.photoURL : data.photoURL}
//             className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
//           />
//           <h1 className="text-3xl font-bold pt-8 lg:pt-0">
//             {social ? dataS.displayName : data.firstname + data.lastname}
//           </h1>
//           <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

//           <p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start">
//             <IoLocationSharp className="mr-5 w-7 h-7" /> Job Location :{" "}
//             {data.jobLocation}
//           </p>
//           <p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start">
//             <MdEmail className=" mr-5 w-7 h-7" />
//             {data.email}{" "}
//           </p>
//           <p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start">
//             <FaPhoneAlt className=" mr-5 w-6 h-6" />
//             {data.phone}{" "}
//           </p>
//           <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

//           <p className="pt-8 text-lg font-semibold">Bio:</p>
//           <p className="pt-2 text-Text text-xs lg:text-sm">{data.bio}</p>

//           <div className="pt-12 pb-8"></div>
//           <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
//           <h1 className="text-[#000000] pt-4 text-">Urls:</h1>
//           <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-col ">
//             <ul>
//               <li className="flex justify-left items-center">
//                 <FaGithubSquare className="mr-5 w-7 h-7" /> {data.githubUrl}
//               </li>
//               <li className="flex justify-left items-center">
//                 <FaTwitterSquare className="mr-5 w-7 h-7" />
//                 {data.twitterUrl}
//               </li>
//               <li className="flex justify-left items-center">
//                 <FaLinkedin className="mr-5 w-7 h-7" />
//                 {data.linkedinUrl}
//               </li>
//               <li className="flex justify-left items-center">
//                 <CgWebsite className="mr-5 w-7 h-7" />
//                 {data.portfolioUrl}
//               </li>
//               <li className="flex justify-left items-center">
//                 <CgWebsite className="mr-5 w-7 h-7" />
//                 {data.otherWebsite}
//               </li>
//             </ul>
//           </div>
//           <div>
//             <p className="pt-4 text-lg font-semibold">Job Information:</p>
//             <p className="pt-4 text-base mx-2 font-semibold flex items-center justify-center lg:justify-start">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase mr-5 w-7 h-7"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
//               </svg>
//               Title : {data.jobTitle}
//             </p>
//             <p className="pt-4 text-base mx-2 font-semibold flex items-center justify-center lg:justify-start">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="icon icon-tabler icons-tabler-outline icon-tabler-hourglass-empty"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
//                 <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
//               </svg>
//               Experience : {data.workExperience}
//             </p>
//             <p className="pt-4 text-base mx-2 font-semibold flex items-center justify-center lg:justify-start">
//               <svg
//                 className="w-[24px] h-[24px]"
//                 fill="#000000"
//                 viewBox="0 0 50 50"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlns:xlink="http://www.w3.org/1999/xlink"
//               >
//                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   <path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"></path>
//                 </g>
//               </svg>
//               Company : {data.currentCompany}
//             </p>
//             <p className="pt-4 text-base mx-2 font-semibold flex items-center justify-center lg:justify-start">
//               <svg
//                 height="28px"
//                 width="28px"
//                 version="1.1"
//                 id="Capa_1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 viewBox="0 0 502.685 502.685"
//                 xmlSpace="preserve"
//                 fill="#000000"
//               >
//                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   <g>
//                     <g>
//                       <path
//                         style={{ fill: "#010002" }}
//                         d="M383.96,261.729V118.564H232.123V17.375H0V338.09h232.123V147.296c34.837,0,104.683,0,123.104,0 c0,12.727,0,65.403,0,114.39L236.524,380.433h45.277V485.31h175.651V380.433h45.234L383.96,261.729z M33.888,51.241h62.577v37.166 H33.888V51.241z M33.888,121.648h62.577v37.21H33.888V121.648z M142.648,326.096H85.528V221.262h57.098L142.648,326.096 L142.648,326.096z M194.245,158.836H131.69v-37.188h62.555V158.836z M194.245,88.408H131.69V51.241h62.555V88.408z M396.536,476.164h-52.115v-91.611h52.115V476.164z"
//                       />
//                     </g>
//                   </g>
//                 </g>
//               </svg> Remote Working : {data.remoteWorking}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/*<!--Img Col--> */}
//       <div className="  w-full lg:w-2/5 ">
//         {/*<!-- Big profile image for side bar (desktop) --*/}
//         <img
//           src={social ? dataS.photoURL : data.photoURL}
//           className=" ml-5 rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
//         />
//       </div>
//     </div>
//   );
// };

// export default Profile;

return ( 
  <> 
  <div className="container flex items-center justify-left h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    {/*<!--Main Col-- */}
    <div
      id="profile"
      className="profile-container w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0"
    >
      <div className="profile-content p-4 md:p-12 text-center lg:text-left ">
        {/*<!-- Image for mobile view--> */}
        <img
          src={social ? dataS.photoURL : data.photoURL}
          className="profile-image-mobile block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
        />
        <h1 className="profile-name text-3xl font-bold pt-8 lg:pt-0">
          {social ? dataS.displayName : data.firstname + data.lastname}
        </h1>
        <div className="image-container w-full lg:w-2/5">
      {/*<!-- Big profile image for side bar (desktop) --*/}
      <img  
        src={social ? dataS.photoURL : data.photoURL}
        className="profile-image-desktop ml-5 rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
      />
    </div>
        <div className="separator mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

        <p className="location pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start">
          <IoLocationSharp className="icon mr-5 w-7 h-7" /> Job Location : {data.jobLocation}
        </p>
        <p className="email pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start">
          <MdEmail className="icon mr-5 w-7 h-7" /> {data.email}
        </p>
        <p className="phone pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start">
          <FaPhoneAlt className="icon mr-5 w-6 h-6" /> {data.phone}
        </p>
        <div className="separator mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

        <p className="bio-title pt-8 text-lg font-semibold">Bio:</p>
        <p className="bio pt-2 text-Text text-xs lg:text-sm">{data.bio}</p>

        <div className="spacer pt-12 pb-8"></div>
        <div className="separator mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <h1 className="urls-title text-[#000000] pt-4 text-">Urls:</h1>
        <div className="urls mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-col">
          <ul>
            <li className="url-item flex justify-left items-center">
              <FaGithubSquare className="icon mr-5 w-7 h-7" /> {data.githubUrl}
            </li>
            <li className="url-item flex justify-left items-center">
              <FaTwitterSquare className="icon mr-5 w-7 h-7" /> {data.twitterUrl}
            </li>
            <li className="url-item flex justify-left items-center">
              <FaLinkedin className="icon mr-5 w-7 h-7" /> {data.linkedinUrl}
            </li>
            <li className="url-item flex justify-left items-center">
              <CgWebsite className="icon mr-5 w-7 h-7" /> {data.portfolioUrl}
            </li>
            <li className="url-item flex justify-left items-center">
              <CgWebsite className="icon mr-5 w-7 h-7" /> {data.otherWebsite}
            </li>
          </ul>
        </div>
        <div>
          <p className="job-info-title pt-4 text-lg font-semibold">Job Information:</p>
          <p className="job-title pt-4 text-base mx-2 font-semibold flex items-center justify-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase mr-5 w-7 h-7"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
            </svg>
            Title : {data.jobTitle}
          </p>
          <p className="experience pt-4 text-base mx-2 font-semibold flex items-center justify-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-hourglass-empty"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
              <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
            </svg>
            Experience : {data.workExperience}
          </p>
          <p className="company pt-4 text-base mx-2 font-semibold flex items-center justify-center lg:justify-start">
            <svg
              className="icon w-[24px] h-[24px]"
              fill="#000000"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"></path>
              </g>
            </svg>
            Company : {data.currentCompany}
          </p>
          <p className="remote-working pt-4 text-base mx-2 font-semibold flex items-center justify-center lg:justify-start">
            <svg
              height="28px"
              width="28px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 502.685 502.685"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      style={{ fill: "#010002" }}
                      d="M383.96,261.729V118.564H232.123V17.375H0V338.09h232.123V147.296c34.837,0,104.683,0,123.104,0 c0,12.727,0,65.403,0,114.39L236.524,380.433h45.277V485.31h175.651V380.433h45.234L383.96,261.729z M33.888,51.241h62.577v37.166 H33.888V51.241z M33.888,121.648h62.577v37.21H33.888V121.648z M142.648,326.096H85.528V221.262h57.098L142.648,326.096 L142.648,326.096z M194.245,158.836H131.69v-37.188h62.555V158.836z M194.245,88.408H131.69V51.241h62.555V88.408z M396.536,476.164h-52.115v-91.611h52.115V476.164z"
                    />
                  </g>
                </g>
              </g>
              </svg> 
              Remote Working : {data.remoteWorking}
          </p>
        </div>
      </div>
    </div>

    {/*<!--Img Col--> */}
    
  </div>
  </>
);
}

export default Profile
