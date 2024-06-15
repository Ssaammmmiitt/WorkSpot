// import React, { useEffect, useState } from 'react'
// import Login from '../Components/Form/Login'
// import Lottie from 'lottie-react'
// import login1 from '../Assets/login1.json'
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../firebase/AuthProvider'
// const ComponentA = () => {
//   return (<div className='w-[50%] h-[50%] mx-auto'><Lottie animationData={login1} />
//   </div>)
// }

// const LoginPage = () => {

//   const [showAnim, setShowAnim] = useState(true);
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   console.log(user);

//   if (user) {
//     return navigate("/app");
//   }

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowAnim(false);
//     }, 2000);

//     return () => clearTimeout(timer);

//   }, []);


//   return (
//     <div>
//       {showAnim ? <ComponentA /> : <Login user={user} />}
//     </div>
//   )
// }

// export default LoginPage

import React, { useEffect, useState } from 'react';
import Login from '../Components/Form/Login';
import Lottie from 'lottie-react';
import login1 from '../Assets/login1.json';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthProvider';

const ComponentA = () => {
  return (<div className='w-[50%] h-[50%] mx-auto'><Lottie animationData={login1} /></div>);
};

const LoginPage = () => {
  const [showAnim, setShowAnim] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnim(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showAnim ? <ComponentA /> : <Login />}
    </div>
  );
};

export default LoginPage;
