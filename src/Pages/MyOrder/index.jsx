import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCardContext } from "../../Context";

function MyOrder() {
  const context = useContext(ShoppingCardContext);
  return (
    <Layout>
      Hola Order
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => {
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
