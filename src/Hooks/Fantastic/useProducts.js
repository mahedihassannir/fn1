/* Date: 8/19/23
 * Author: Mahedi
 * Description: Get all the products
*/
import { useQuery } from "@tanstack/react-query";
import useUserProfile from "../user/userProfile";

const useProducts = (id) => {
  console.log(id);
  const authToken = localStorage.getItem("userToken")
  const { refetch, data: products = [] } = useQuery({

    queryKey: ['products', id],

    queryFn: async () => {

      const res = await fetch(`http://localhost:5000/api/v1/user/product/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` }
      })
      return res.json();
    }
  });
  console.log(products, "products");
  return [products, refetch];
};
export default useProducts;
