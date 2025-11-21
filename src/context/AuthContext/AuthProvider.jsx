import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../../firebase/firebase.init';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }   
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })

    },[])
    const authInfo={
          user,
          loading,
          createUser,
          loginUser,
          logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;