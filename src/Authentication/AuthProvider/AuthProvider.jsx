
/**
 * 
 * author:Mahedi Hassan.
 * description:This jsx file is use for authentication contex .
 * date:17/8/2023.
 * 
 */


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth'


import app from '../firebase';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const auth = getAuth(app)


// contex makeed 
export const ContexM = createContext(null)
// ends




const AuthProvider = ({ children }) => {


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

    //avengers 
    //add to cart function
    //Toma
    const addToCart = (singleProduct, quantity = 1) => {
        const addedProduct = {
            _id: singleProduct?._id,
            price: singleProduct?.price,
            product_name: singleProduct?.name,
            quantity: quantity
        }
        fetch("http://localhost:5000/post/product", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'Product already exists') {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Product already exists',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    setTotalCart(totalCart + 1)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })




    }


    const [totalCart, setTotalCart] = useState(0)
    useEffect(() => {
        fetch("http://localhost:5000/totalCart/quantity")
            .then(res => res.json())
            .then(data => {
                setTotalCart(data?.totalCart)
            })


    }, [])




    // all values to work with contex
    const userInfos = {
        user,
        UpdateUser,
        creareUser,
        singinUser,
        Logout,
        loader,
        loginwithpopup,
        addToCart,
        totalCart,
        setTotalCart
    }

    return <ContexM.Provider value={userInfos}>

        {children}

    </ContexM.Provider>


};

export default AuthProvider;