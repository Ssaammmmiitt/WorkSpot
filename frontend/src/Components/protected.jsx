/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../firebase/AuthProvider";

export const ProtectedRoute = ({ children }) => {
    let { user, loading } = useAuth();
    if (user) {
        loading = false;
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    return user ? children : <Navigate to="/login" />;
};