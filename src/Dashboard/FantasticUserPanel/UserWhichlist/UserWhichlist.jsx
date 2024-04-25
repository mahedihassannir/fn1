import { useEffect, useState } from "react";
import useUserProfile from "../../../Hooks/user/userProfile";
import UseWishList from "../../../Hooks/wishList/UseWishList";

const UserWhichlist = () => {
    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);
    console.log(userProfile?.sanitizedResult?._id);
    const [wishList, setWishListData] = useState(null);
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/user/wish_list?userId=${userProfile?.sanitizedResult?._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                    }
                });
                const data = await response.json();
                setWishListData(data);
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            };
        };

        if (authToken) {
            fetchUserProfileData();
        };
    }, [authToken]);
    console.log(wishList);
    return (
        <div>
            {
                wishList?.result?.map(data =>
                    <h1>{data._id}</h1>

                )
            }

        </div>
    );
};

export default UserWhichlist;