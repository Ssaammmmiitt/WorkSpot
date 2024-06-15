import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
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
import MyJobs from "../Pages/MyJobs.jsx";
import { Children } from "react";
import Footer from "../Components/FooterDiv/Footer.jsx";
import NavBar from "../Components/NavBar/NavBar.jsx";
import { ProtectedRoute } from "../firebase/protected.jsx";
import Profile from "../Pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <><ProtectedRoute><App /></ProtectedRoute></>,
    children: [
      { path: "", element: < Home /> },
      { path: "salary", element: <Salary /> },
      { path: "my-jobs", element: <MyJobs /> },
      { path: "job/:id", element: <JobDetails /> },
    ]
  },
  { path: "/login", element: <><NavBar /> <LoginPage /><Footer/></> },
  { path: "/sign-up", element: <><NavBar /> <SignUpPage /><Footer/></> },
  { path: "/complete-registration", element: <><NavBar /> <CompleteRegistraion /><Footer/></> },
  { path: "/reset", element: <ResetForm /> },
  { path: "/reset-otp", element: <Reset_otp /> },
  { path: "/update-password", element: <UpdatePass /> },
  { path: "/*", element: <Navigate to="/login" /> },
  { path: "/contact-us", element: <><NavBar /><ContactUsPage /> <Footer/></> },
  { path: "/about", element: <><NavBar /><About /> <Footer/></> },
  { path: "terms-and-conditions", element: <><NavBar /><TermsAndConditions /> <Footer/></> },
  { path: "faq", element: <><NavBar /><FAQPage /><Footer/> </> },
  {path:"profile",element:<><NavBar/><Profile/><Footer/></>}
]);

export default router;
// import {createBrowserRouter,  RouterProvider } from "react-router-dom";
// import App from "../App.jsx";
// import Home from "../Pages/Home.jsx";
// import About from "../Pages/About.jsx";
// import LoginPage from "../Pages/LoginPage.jsx";
// import SignUpPage from "../Pages/SignUpPage.jsx";
// import CompleteRegistraion from "../Pages/CompleteRegistraion.jsx";
// import ResetForm from "../Pages/Reset.jsx";
// import Reset_otp from "../Pages/Reset-Otp.jsx";
// import UpdatePass from "../Pages/UpdatePass.jsx";
// import ContactUsPage from "../Pages/ContactUs.jsx";
// import TermsAndConditions from "../Pages/TermsAndConditions.jsx";
// import FAQPage from "../Pages/FAQPage.jsx";
// import JobDetails from "../Pages/JobDetails.jsx";
// import Salary from "../Pages/EstSalary.jsx";
// import PrivateRoute from "./PrivateRoute";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <PrivateRoute>
//         <App />
//       </PrivateRoute>
//     ),
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/job/:id', element: <JobDetails /> },
//       { path: '/salary', element: <Salary /> },
//     ],
//   },
//   { path: '/login', element: <LoginPage /> },
//   { path: '/sign-up', element: <SignUpPage /> },
//   { path: '/complete-registration', element: <CompleteRegistraion/> },
//   { path: '/reset', element: <ResetForm /> },
//   { path: '/reset-otp', element: <Reset_otp/> },
//   { path: '/update-password', element: <UpdatePass /> },
//   { path: '/contact-us', element: <ContactUsPage /> },
//   { path: '/faq', element: <FAQPage /> },
//   { path: '/terms-and-conditions', element: <TermsAndConditions /> },
// ]);

// export default router;
