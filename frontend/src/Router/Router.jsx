import {createBrowserRouter,  RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import SignUpPage from "../Pages/SignUpPage.jsx";
import CompleteRegistraion from "../Pages/CompleteRegistraion.jsx";
import ResetForm from "../Pages/Reset.jsx";
import Reset_otp from "../Pages/Reset-Otp.jsx";
import UpdatePass from "../Pages/UpdatePass.jsx";
import ContactUsPage from "../Pages/ContactUs.jsx";
import TermsAndConditions from "../Pages/TermsAndConditions.jsx";
import FAQPage from "../Pages/FAQPage.jsx";
import JobDetails from "../Pages/JobDetails.jsx";
import Salary from "../Pages/EstSalary.jsx";





const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        { path:"/",element:<Home/>},
        { path:"/about",element:<About/>},
        { path:"/login",element:<LoginPage/>},
        { path:"/sign-up",element:<SignUpPage/>},
        {path:"/complete-registration",element:<CompleteRegistraion/>},
        {path:"/reset",element:<ResetForm/>},
        {path:"/reset-otp",element:<Reset_otp/>},
        {path:"/update-password",element:<UpdatePass/>},
        {path:"/contact-us",element:<ContactUsPage/>},
        {path:"/faq",element:<FAQPage/>},
        {path:"/terms-and-conditions",element:<TermsAndConditions/>},
        {path:"/job/:id",element:<JobDetails/>},
        {path:"/salary",element:<Salary/>}

      ]
    },
  ]);

  export default router;