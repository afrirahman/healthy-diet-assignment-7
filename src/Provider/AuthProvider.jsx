import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

    const logout = () =>{
        return signOut(auth);
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return unsubscribe();
    },[]);

    const authData ={
        user,
        setUser,
        createUser,
        login,
        logout
    }

    return <AuthContext value={authData}>{children}</AuthContext> 
};

export default AuthProvider;