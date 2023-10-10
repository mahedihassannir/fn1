import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseCartHook = () => {

    const { user, loader } = useContext(ContexM);

    // const token = localStorage.getItem('token');

    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['cart', user?.email],


        queryFn: async () => {

            // sometime use need to chek the value it is true or false
            const res = await fetch(`http://localhost:5000/carts?email=${user && user.email}`)
            // sometime use need to chek the value it is true or false bigest learning 

            return res.json();
        },

        // queryFn: async () => {
        //     const res = await axiosSecure(`/carts?email=${user?.email}`)


        //     return res.data;

        // }

    });

    return [cart, refetch];

};
export default UseCartHook;