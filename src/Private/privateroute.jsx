// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// const Privateroute = ({ Children }) => {

//     const authToken = localStorage.getItem("userToken")
//     const [userProfile, setUserProfile] = useState(null);
//     console.log(userProfile);
//     useEffect(() => {
//         const fetchUserProfileData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/v1/user/profile', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authToken}`
//                     }
//                 });
//                 const data = await response.json();
//                 setUserProfile(data);
//             } catch (error) {
//                 console.error('Error fetching user profile data:', error);
//             }
//         };

//         if (authToken) {
//             fetchUserProfileData();
//         }
//     }, [authToken]);

//     if (userProfile?.sanitizedResult?.accountStatus === "good") {
//         return Children
//     }

//     return <Navigate to="/login" replace={true} />

// };

// export default Privateroute;


import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const SellerPrivate = ({ children }) => {

    const authToken = localStorage.getItem("userToken")
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(userProfile?.sanitizedResult?._id);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/user/profile`, {
                    headers: { Authorization: `Bearer ${authToken}` }
                });
                const userData = response.data;
                setUserProfile(userData);
                // console.log({ userData });
            } catch (error) {
                console.error('Error fetching seller data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (authToken) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [authToken]);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a proper loading component
    }

    if (userProfile?.sanitizedResult?._id) {
        return children;
    }

    return <Navigate to="/login" replace={true} />

};

export default SellerPrivate;
