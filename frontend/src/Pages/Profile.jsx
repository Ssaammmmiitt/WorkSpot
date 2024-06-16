import React, { useEffect,useState } from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db_firebase } from '../firebase/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import {useAuth} from '../firebase/AuthProvider';
import { set } from 'react-hook-form';

const Profile = () => {
  let { user, logout } = useAuth();
  const [users, setUser] = useState(null);
  // const [photoUrl, setPhotoUrl] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [displayName, setDisplayName] = useState("");
  const [data, setData] = useState({});           //firebase data 
  const [dataS,setDatas]=useState({});            //social data
  const [social,setSocial]=useState(false);  

  useEffect(() => {
    const getJobs = async () => {
      const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
  
        if (user) {
            console.log(db_firebase);
            const userDoc = await getDocs(collection(db_firebase, "users"));
            console.log(userDoc);
            let data1 = userDoc.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            
            data1= data1.filter((doc) => doc.id === user.uid);
            console.log(data1)
            console.log(data1[0])
            console.log(data);
            data1 = data1[0];
            setData(data1);
            //setJobs(data.job_id);
            console.log(data);
            if (user.providerData[0].providerId === "password"){
            setSocial(false);
          } else {
            if (user.providerData[0].providerId === "google.com" || user.providerData[0].providerId === "github.com") {
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
  
  return (
    
  <div className="max-w-4xl flex items-center justify-left h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
	{/*<!--Main Col-- */}
	<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
	

		<div className="p-4 md:p-12 text-center lg:text-left">
			{/*<!-- Image for mobile view--> */}
			<img src={social?dataS.photoURL:data.photoURL} className='block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center'/>
			<h1 className="text-3xl font-bold pt-8 lg:pt-0">{social?dataS.displayName:data.firstname + data.lastname}</h1>
			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
			<p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase mr-5 w-7 h-7">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
  </svg> {data.jobTitle}</p>
			<p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start"><IoLocationSharp className='mr-5 w-7 h-7'/> Job Location : {data.jobLocation}</p>
            <p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start"><MdEmail className=' mr-5 w-7 h-7'/>{data.email} </p>
            <p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start"><FaPhoneAlt className=' mr-5 w-6 h-6'/>{data.phone} </p>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

			<p className="pt-8 text-lg font-semibold">Bio:</p>
      <p className="pt-2 text-Text text-xs lg:text-sm">{data.bio}</p>

			<div className="pt-12 pb-8">
				
			</div>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <h1 className='text-[#000000] pt-4 text-'>Urls:</h1>
			<div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-col ">
            <ul >
				<li className='flex justify-left items-center'><FaGithubSquare className='mr-5 w-7 h-7'/> {data.githubUrl}</li>
                <li className='flex justify-left items-center'><FaTwitterSquare className='mr-5 w-7 h-7'/>{data.twitterUrl}</li>
                <li className='flex justify-left items-center'><FaLinkedin className='mr-5 w-7 h-7'/>{data.linkedinUrl}</li>
                <li className='flex justify-left items-center'><CgWebsite className='mr-5 w-7 h-7'/>{data.portfolioUrl}</li>
                <li className='flex justify-left items-center'><CgWebsite className='mr-5 w-7 h-7'/>{data.otherWebsite}</li>

			</ul>
		</div>
    <div>
    <p className="pt-4 text-lg font-semibold">Job Information:</p>
      <p className="pt-2 text-Text text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase mr-5 w-7 h-7">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
  </svg> Type <span className='ml-4'> {data.jobTitle}</span></p>
    </div>

	</div>
    </div>
	
	{/*<!--Img Col--> */}
	<div className="  w-full lg:w-2/5 ">
		{/*<!-- Big profile image for side bar (desktop) --*/}
		<img src={social?dataS.photoURL:data.photoURL} className=" ml-5 rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
		
	</div>
    </div>
    
);
}

export default Profile