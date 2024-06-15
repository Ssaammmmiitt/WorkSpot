/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

export const ProtectedRoute = ({ children }) => {
    let { user, loading } = useContext(AuthContext);

    return user ? children : <Navigate to="/login" />;
};