/**
 * author:Mahedi Hassan.
 * description:This jsx file is use for authentication contex .
 * date:17/8/2023.
 *
 * @format
 */

import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";

import app from "../firebase";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import SingleProduct from "../../Pages/SingleProduct/SingleProduct";

const auth = getAuth(app);

// contex makeed
export const ContexM = createContext({});
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
		return signInWithPopup(auth, provider);
	};

	// logout user
	const Logout = () => {
		SetLoader(true);
		return signOut(auth);
	};
	// ends

	// this useeffect is watching the user
	useEffect(() => {
		const off = onAuthStateChanged(auth, watch => {
			Setuser(watch);

			SetLoader(false);
		});

		return () => {
			off;
		};
	});
	// this useeffect is watching the user ends

	// user profile update
	const UpdateUser = (name, image) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: image,
		});
	};

	//avengers
	//add to cart function
	//Toma
	const [loaddingForCart, setLoaddingForCart] = useState(false);
	const addToCart = singleProductData => {
		setLoaddingForCart(true);

		const addedCart = JSON.parse(localStorage.getItem("cartProduct"));

		if (!addedCart) {
			localStorage.setItem(
				"cartProduct",
				JSON.stringify({ [singleProductData._id]: 1 })
			);
		} else if (addedCart.hasOwnProperty([singleProductData._id])) {
			addedCart[singleProductData._id] =
				addedCart[singleProductData._id] + 1;
			localStorage.setItem(
				"cartProduct",
				JSON.stringify({ ...addedCart })
			);
		} else {
			addedCart[singleProductData._id] = 1;
			localStorage.setItem(
				"cartProduct",
				JSON.stringify({ ...addedCart })
			);
		}

		setTimeout(function () {
			setLoaddingForCart(false);
			setTotalCart(totalCart + 1);
		}, 200);
		// to set reale time cart
	};

	const [totalCart, setTotalCart] = useState(0);
	useEffect(() => {
		const cartValue = JSON.parse(localStorage.getItem("cartProduct"));
		let totalCart = 0;
		for (let key in cartValue) {
			console.log(cartValue[key]);
			totalCart += cartValue[key];
		}

		setTotalCart(totalCart);
	}, []);

	const [proceedPaymentForProducts, setProceedPaymentForProducts] = useState(
		[]
	);

	// state for show catagory and sort select
	const [showCategory, setShowCategory] = useState(false);
	const [showSorting, setShowSorting] = useState(false);
	const [category, setCategory] = useState("All Products");
	const [sorting, setSorting] = useState("Default Sorting");

	// state for show seller category
	
	const [sellerCategory, setSellerCategory] = useState("All Products");


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
		setTotalCart,
		loaddingForCart,
		proceedPaymentForProducts,
		setProceedPaymentForProducts,
		showCategory,
		setShowCategory,
		showSorting,
		setShowSorting,
		category,
		setCategory,
		sorting,
		setSorting,
		sellerCategory,
		setSellerCategory,
	};

	return <ContexM.Provider value={userInfos}>{children}</ContexM.Provider>;
};

export default AuthProvider;
