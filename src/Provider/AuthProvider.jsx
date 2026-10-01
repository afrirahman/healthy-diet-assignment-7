import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import Loading from '../Pages/Loading';



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
     
    const [user,setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const createUser=(email,password)=>{
         setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login =(email, password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
       
    };

    const updateUserProfile = (name,photoURL) =>{
         setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        }).then(()=>auth.currentUser);
    };

    const logout = () =>{
        return signOut(auth).then(()=>{
            setUser(null);
        })
    };

    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth,email);
    };

    const loginWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    },[]);

    const authData ={
        user,
        setUser,
        createUser,
        login,
        logout,
        updateUserProfile,
        loading,
        setLoading,
        resetPassword,
        loginWithGoogle
    }

    return (<AuthContext value={authData}>
        {loading ? <Loading></Loading> : children}
        </AuthContext> )
};

export default AuthProvider;