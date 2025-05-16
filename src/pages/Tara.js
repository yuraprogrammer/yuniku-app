import ContentHeader from "../components/contentHeader";
import OrdersTable from "../components/ordersTable";
import { useEffect, useState } from "react";
import { getData } from "../rest_api/common_rest_commands";

const Tara = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    const fetchOrders = async () => {
      setLoading(true);
      try{
        await getData("http://localhost:2325/apTSP-Orders-web/webresources/ManagedOrders/byStatus/3").then((response) => {
          setData(response);          
          setError(null);
        });        
      }catch(err){
        setError(err);
        console.error(error);
        
      }finally{
        setLoading(false);
      }
      
    };
    fetchOrders();
  }, []);
  
  return (
    <div>
      <ContentHeader title="Empty trucks" bg_color="indigo" text_color="whitesmoke"/>
      {loading && <div>Loading</div>}
        {!loading && (
          <OrdersTable orders={data} color='red'/>                    
        )}
    </div>
  );
}

export default Tara;