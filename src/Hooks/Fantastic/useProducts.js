/* Date: 8/19/23
 * Author: MASUM
 * Description: Get all the products
*/

import { useEffect, useState } from "react";

const useProducts = () => {
  // store all products
  const [products, setProducts] = useState([]);

  // can use this loading to set any conditions based on data loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/allcategory')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error to fetching data:', error);
        setLoading(false);
      });
  }, []);

  return { products, loading };
};

export default useProducts;
