import { useContext, useEffect, useState } from "react";
import { ContexM } from "../Authentication/AuthProvider/AuthProvider";
import { Children } from "react";
import { Navigate } from "react-router-dom";
import useUserProfile from "../Hooks/user/userProfile";

const SellerPrivate = ({ Children }) => {
    const [seller, SetSeller] = useState(null);
    const sellerAuthToken = localStorage.getItem("sellerToken");
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/seller/profile`, {
                    headers: { Authorization: `Bearer ${sellerAuthToken}` }
                });
                const sellerData = response.data;
                SetSeller(sellerData);
                console.log({ sellerData });
                console.log(sellerData);

                // Set sellerData in your component state or context for rendering.
            } catch (error) {
                console.error('Error fetching seller data:', error);
            };
        };

        fetchData();

    }, []);
    console.log(seller);
    if (sellerAuthToken) {
        return Children;
    };

    return <Navigate to="/seller_login" replace={true} />

};

export default SellerPrivate;