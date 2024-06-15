/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "./AuthProvider";

export const ProtectedRoute = ({ children }) => {
    let { user, loading } = useAuth();
    return user ? children : <Navigate to="/login" />;
};