// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import './index.css'
// import router from './Router/Router.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './Router/Router.jsx';
import  AuthProvider  from './firebase/AuthProvider.jsx'; // Import the AuthProvider component

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider> {/* Wrap the RouterProvider with AuthProvider */}
    <RouterProvider router={router} />
  </AuthProvider>,
);

