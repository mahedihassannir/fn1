import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const UseSellerOrders = () => {
    const { user, loader } = useContext(ContexM);

    const [seller, Setseller] = useState(null);
    const sellerid = localStorage.getItem("userID")

    // here we fetch the seller Details
    useEffect(() => {

        fetch(`http://localhost:5000/seller_data/${sellerid}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Setseller(data)
            })

    }, [])

    console.log(seller);
    const { refetch, data: order = [] } = useQuery({

        queryKey: ['order', user?.email],

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/orders?email=${seller?.email}`)

            return res.json();
        }


    });

    console.log(order.length);

    return [order, refetch];
};

export default UseSellerOrders