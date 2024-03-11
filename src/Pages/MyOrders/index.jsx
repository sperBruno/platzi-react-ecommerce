import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCardContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCardContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl mb-4">My Orders</h1>
    
      </div>
      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            ></OrdersCard>
          </Link>
        );
      })}
    </Layout>
  );
}

export default MyOrders;
