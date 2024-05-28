import React from 'react'
import NavBar from "./Components/NavBar/NavBar"
import Search from './Components/SearchDiv/Search'
import Jobs from './Components/JobDiv/Jobs'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'
import SignUp from './Components/Form/SignUp';
import SignUp1 from './Components/Form/SignUpFull';
import Reset from './Components/Password/Reset';
import Otp from './Components/Password/ResetOtp';
import Update from './Components/Password/Update';
import Faq from './Components/FAQ/Faq';
import Login from './Components/Form/Login';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs'; 
import Try from './Components/try';

const App = () => {
  return (
    <div className='w-[85%] m-auto'>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
      <Login/>
      <SignUp1/>
      <Reset/>
      <Otp/>
      <Update/>
      <SignUp/>
      <Faq/>
      <ContactUs/>
      <AboutUs/>
      <Try/>
    </div>
  )
}

export default App