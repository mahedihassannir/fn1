import { useContext } from "react";
import { useEffect } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Useaddress = () => {

    const { user, loader } = useContext(ContexM)


    const { refetch, data: address = [] } = useQuery({

        queryKey: ['address', user?.email],

        enabled: !loader,

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/customerInfo?email=${user?.email}`)

            return res.json();
        }


    });


    return [address, refetch];



};

export default Useaddress;