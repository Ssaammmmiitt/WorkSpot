/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "./AuthProvider";

// export const ProtectedRoute = ({ children }) => {
//     let { user, loading } = useAuth();
//     const idToken = localStorage.getItem('idToken');
//     const tokenExpiration = localStorage.getItem('tokenExpiration');
//     const now = new Date().getTime();
//     console.log(idToken, tokenExpiration, now);
//     if (idToken && tokenExpiration > now) {
//         user = true;
//     }
//     return user ? children : <Navigate to="/login" />;
// };


const isSessionValid = () => {
    const idToken = localStorage.getItem('idToken');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    const now = new Date().getTime();

    return tokenExpiration && now < tokenExpiration && idToken;
};

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (!isSessionValid() || !user) {
        return <Navigate to="/login" />;
    }

    return children;
};