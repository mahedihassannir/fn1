import React, { useEffect, useState } from 'react';
import useUserProfile from '../../../Hooks/user/userProfile';

const UserReturn = () => {
    const authToken = localStorage.getItem("userToken")
    const [returns, setReturn] = useState(null);
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/user/return`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                    }
                });
                const data = await response.json();
                setReturn(data);
            } catch (error) {
                console.error('Error fetching user return data:', error);
            };
        };

        if (authToken) {
            fetchUserProfileData();
        };
    }, [authToken]);
    console.log(returns);
    return (
        <div>
            {
                returns?.result?.map(data => <h1>{data._id}</h1>)
            }
        </div>
    );
};

export default UserReturn;