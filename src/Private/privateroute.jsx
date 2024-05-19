import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const Privateroute = ({ Children }) => {

    const authToken = localStorage.getItem("userToken")
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                    }
                });
                const data = await response.json();
                setUserProfile(data);
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            }
        };

        if (authToken) {
            fetchUserProfileData();
        }
    }, [authToken]);

    if (userProfile?.sanitizedResult?.accountStatus === "good") {
        return Children
    }

    return <Navigate to="/login" replace={true} />

};

export default Privateroute;

