import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Router/Router.jsx'
import { AuthProvider } from './firebase/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider >,
)
// function main({ children }) {

//   const { user, loading } = React.useContext(AuthContext);
//   const Location = useLocation();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (user && Location.pathname === "/app") {
//     return (
//       <AuthProvider>
//         <RouterProvider router={router}>
//           <Outlet />
//         </RouterProvider>
//       </AuthProvider>
//     );
//   }
// }


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
// import './index.css';
// import router from './Router/Router.jsx';
// import  AuthProvider  from './Router/AuthProvider.jsx'; // Import the AuthProvider component

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <AuthProvider> {/* Wrap the RouterProvider with AuthProvider */}
//     <RouterProvider router={router} />
//   </AuthProvider>,
// );

