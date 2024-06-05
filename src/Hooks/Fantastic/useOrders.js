import { useEffect } from "react";
import { useState } from "react";

function useOrders() {
    const [orders, setOrders] = useState([]);
    
      useEffect(() => {
        fetch('https://e-com-server-7zwq.onrender.com/orders')
          .then(response => response.json())
          .then(data => {
            setOrders(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return orders
}

export default useOrders