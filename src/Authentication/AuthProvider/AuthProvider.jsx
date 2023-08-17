
/**
 * 
 * author:Mahedi Hassan.
 * description:This jsx file is use for authentication contex .
 * date:17/8/2023.
 * 
 */


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'


import app from '../firebase';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const auth = getAuth(app)


// contex makeed 
export const ContexM = createContext(null)
// ends




const AuthProvider = () => {


    const [user, Setuser] = useState(null);

    // loader 
    const [loader, SetLoader] = useState(true);
    // ends


    // user cretae
    const creareUser = (email, password) => {
        SetLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // ends

    // login user
    const singinUser = (email, password) => {
        SetLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // ends



    // login with google
    const provider = new GoogleAuthProvider();

    const loginwithpopup = () => {

        return signInWithPopup(auth, provider)

    };

    // logout user
    const Logout = () => {
        SetLoader(true)
        return signOut(auth)
    };
    // ends



    // this useeffect is watching the user
    useEffect(() => {

        const off = onAuthStateChanged(auth, watch => {
            Setuser(watch)

            SetLoader(false)

        });

        return (() => {
            off
        });

    });
    // this useeffect is watching the user ends



    // user profile update
    const UpdateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        });
    };


    // all values to work with contex
    const userInfos = {
        user,
        UpdateUser,
        creareUser,
        singinUser,
        Logout,
        loader,
        loginwithpopup
    }

    return <ContexM.Provider value={userInfos}>

        {children}

    </ContexM.Provider>


};

export default AuthProvider;