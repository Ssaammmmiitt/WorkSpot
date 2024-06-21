/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Cookies from "universal-cookie";



export const ProtectedRoute = ({ children }) => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    let { user, loading } = useAuth();
    if (token) {
        user = true;
    }
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};