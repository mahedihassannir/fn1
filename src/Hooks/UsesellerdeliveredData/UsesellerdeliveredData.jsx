import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import axios from "axios";


const UseSellerDeliveredData = () => {

    const { loader } = useContext(ContexM);

    // seller data 
    const [seller, Setseller] = useState(null);

    // here is getting seller Data
    useEffect(() => {

        const fetchData = async () => {

            const id = localStorage.getItem("userID")
            console.log(id);

            try {
                const response = await axios.get(`http://localhost:5000/seller_data/${id}`);
                const sellerData = response.data;

                Setseller(sellerData);

                console.log({ sellerData });
                console.log(sellerData);



                // Set sellerData in your component state or context for rendering.
            } catch (error) {
                console.error('Error fetching seller data:', error);
            }
        }

        fetchData();

    }, [])
    console.log(seller);
    // seller data ends




    const { refetch, data: deliveredData = [] } = useQuery({

        queryKey: ['deliveredData',],
        enabled: !loader,

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/delivereddata?email=${seller?.SellerRegisterdataFromPriviousStep.email}`,)

            return res.json();
        }


    });


    return [deliveredData, refetch];

};
export default UseSellerDeliveredData;




// queryFn: async () => {
//     const res = await axiosSecure(`/carts?email=${user?.email}`)


//     return res.data;

// }