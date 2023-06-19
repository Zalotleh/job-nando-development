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
import  firebase_app from '../firebase/config'
import { collection, getFirestore, setDoc, doc } from '@firebase/firestore'
import { createSubscription } from "@/stripe/subscription";

const database = getFirestore(firebase_app);

const auth = getAuth(firebase_app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({ displayName: null,email: null, uid: null });
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid,
                });
                setIsAuthorized(true)
            } else {
                setUser({ displayName: null,email: null, uid: null});
                setIsAuthorized(false)

            }
            setLoading(false);

        });

        return () => unsubscribe();
    }, []);

    const signUp = async (email, password) => {
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password );
            const user = credentials.user
            setUser({
                email:user.email,
                name: user.displayName,
                uid:user.uid,
            });
            createSubscription(user.uid)
            await saveUser(user.uid, user.email, user.displayName)
        }catch(error){
            console.log(error);
            throw error;
        }

    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const ProviderSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
             // Check if the user is signing up (new user) or signing in (existing user)
            const isNewUser = user.metadata.creationTime === user.metadata.lastSignInTime;

            setUser({ 
                email: user.email,
                displayName: user.displayName,
                uid: user.uid,
             });
             if (isNewUser) {
                createSubscription(user.uid)
             }
             setIsAuthorized(true)
            await saveUser(user.uid, user.email, user.displayName)

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const logOut = async () => {
        setUser({ email: null, uid: null, displayName: null });
        setIsAuthorized(false)

        await signOut(auth);
    };

    async function saveUser(user_id, user_email, displayName){
        const collectionRef = collection(database, 'users');
        const docRef = doc(collectionRef, user_id);
        await setDoc(docRef, { email: user_email, displayName: displayName,user_id: user_id }, { merge: true });

    }

    

    return (
        <AuthContext.Provider value={{ user, signUp, logIn, logOut, ProviderSignIn, isLoading: loading, isAuthorized, setIsAuthorized }}>
            {children}
        </AuthContext.Provider>
    );
};