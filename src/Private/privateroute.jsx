import { useContext } from "react";
import { ContexM } from "../Authentication/AuthProvider/AuthProvider";
import { Children } from "react";
import { Navigate } from "react-router-dom";
import useUserProfile from "../Hooks/user/userProfile";

const Privateroute = ({ Children }) => {

    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);

    if (userProfile) {
        return Children
    };

    return <Navigate to="/login" replace={true} />

};

export default Privateroute;