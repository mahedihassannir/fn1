import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useUserProfile from "../user/userProfile";


const UseCartHook = () => {
    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);
    console.log(userProfile?.sanitizedResult?._id);
    const id = userProfile?.sanitizedResult?._id
    const token = localStorage.getItem("userToken")
    console.log("from 10 number line ", { token });

    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['cart', id],

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/api/v1/user/cart?userId=${id}`, {
                headers: { Authorization: `Bearer ${authToken}` }
            })

            return res.json();
        }


    });

    console.log(cart, "cart");

    return [cart, refetch];

};
export default UseCartHook;




// queryFn: async () => {
//     const res = await axiosSecure(`/carts?email=${user?.email}`)


//     return res.data;

// }