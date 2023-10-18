import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseCartHook = () => {

    const { user, loader } = useContext(ContexM);

    const token = localStorage.getItem("token")
    console.log("from 10 number line ", { token });

    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['cart', user?.email],

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: { authorization: `bearer  ${token}` }
            })

            return res.json();
        }


    });

    console.log(cart.length);

    return [cart, refetch];

};
export default UseCartHook;




// queryFn: async () => {
//     const res = await axiosSecure(`/carts?email=${user?.email}`)


//     return res.data;

// }