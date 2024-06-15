import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar"
import { AuthProvider } from './firebase/AuthProvider';
import { AuthContext } from './firebase/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import { useLocation } from 'react-router-dom';



const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
export default App;
