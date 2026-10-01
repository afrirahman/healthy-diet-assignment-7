import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
     
    const [user,setUser]= useState(null);
    console.log(user);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login =(email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name,photoURL) =>{
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

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return unsubscribe;
    },[]);

    const authData ={
        user,
        setUser,
        createUser,
        login,
        logout,
        updateUserProfile
    }

    return <AuthContext value={authData}>{children}</AuthContext> 
};

export default AuthProvider;