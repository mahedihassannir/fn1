import { useContext } from "react";
import { ContexM } from "../Authentication/AuthProvider/AuthProvider";
import { Children } from "react";
import { Navigate } from "react-router-dom";

const Privateroute = ({ Children }) => {


    const { user } = useContext(ContexM);

    if (user) {
        return Children
    }

    return <Navigate to="/login" replace={true} />

};

export default Privateroute;