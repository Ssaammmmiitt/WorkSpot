import { React, createContext } from "react";
import app from "./firebase.config";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signInWithPopup,
    getRedirectResult,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";

import { useState, useEffect, useContext } from "react";

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // reset password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // create user with google
    const signUpWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // create user with github
    const signUpWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // creating session
    const createSession = async () => {
        const result = get
        if (result.user) {
            setUser(result.user);
            setLoading(false);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authValues = {
        user,
        loading,
        createUser,
        signUpWithGoogle,
        signUpWithGithub,
        logout,
        login,
        resetPassword,
    };

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default { useAuth };

