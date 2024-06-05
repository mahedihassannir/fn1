import { useQuery } from '@tanstack/react-query';
import { ContexM } from '../../Authentication/AuthProvider/AuthProvider';
import { useContext } from 'react';

const UseWishList = () => {
    const { user, loader } = useContext(ContexM);

    const { refetch, data: wishlist = [] } = useQuery({

        queryKey: ['wishlist', user?.email],
        enabled: !loader,

        queryFn: async () => {

            const res = await fetch(`https://e-com-server-7zwq.onrender.com/wishlist?email=${user?.email}`)

            return res.json();
        }


    });
    return [wishlist, refetch];
};
export default UseWishList;