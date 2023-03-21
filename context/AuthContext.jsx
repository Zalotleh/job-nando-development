import React, { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
} from 'firebase/auth';
import { firebase_app} from '../firebase/config'

const auth = getAuth(firebase_app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({ email: null, uid: null });
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({email: user.email,
                    uid: user.uid,});
                setIsAuthenticated(true);
            } else {
                setUser({ email: null, uid: null });
                setIsAuthenticated(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const ProviderSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUser({ email: user.email,
                uid: user.uid });
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
        }
    };

    const logOut = async () => {
        setUser({ email: null, uid: null });
        setIsAuthenticated(false);
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, logIn, logOut, ProviderSignIn, isAuthenticated  }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
