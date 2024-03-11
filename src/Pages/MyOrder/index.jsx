import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCardContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCardContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") {
    index = context.order?.length - 1;
  }
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1>My Order</h1>
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon
            className="h-6 w-6 text-black cursor-pointer"
            // onClick={() => handleDelete(id)}
          />
        </Link>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => {
          return (
            <OrderCard
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.image}
            ></OrderCard>
          );
        })}
      </div>
    </Layout>
  );
}

export default MyOrder;
