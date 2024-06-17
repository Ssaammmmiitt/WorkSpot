/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "./AuthProvider";



export const ProtectedRoute = ({ children }) => {
    let { user, loading } = useAuth();
    //session check
    // const idToken = localStorage.getItem('idToken');
    // const tokenExpiration = localStorage.getItem('tokenExpiration');
    // console.log("Protected.jsx", idToken, tokenExpiration);
    // const now = new Date().getTime();
    // if (user && idToken === user.accessToken && tokenExpiration > now) {
    //     user = true;
    // }
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};