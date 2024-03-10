import { useContext } from "react";
import "./CheckoutSideMenu.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext);
  console.log(context.cardProducts);
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 text-black-500 cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.cardProducts.map((product) => {
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
    </aside>
  );
};

export default CheckoutSideMenu;
