import useUserProfile from "../../../Hooks/user/userProfile";

const UserOrder = () => {
    const authToken = localStorage.getItem("userToken");
    const userProfile = useUserProfile(authToken);

    console.log(userProfile);


    return (
        <div>
            {
                userProfile?.sanitizedResult?.orderHistory.map(data=>
                    
                       <h1>{data._id}</h1>
                )
            }
        </div>
    );
};

export default UserOrder;