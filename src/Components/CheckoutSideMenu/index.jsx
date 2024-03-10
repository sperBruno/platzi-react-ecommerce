import { useContext } from "react";
import "./CheckoutSideMenu.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext);
  console.log(context.cardProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cardProducts.filter(
      (product) => product.id !== id
    );
    context.setCardProducts(filteredProducts);
  };
  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.03",
      products: context.cardProducts,
      totalProducts: context.cardProducts.length,
      totalPrice: totalPrice(context.cardProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCardProducts([]);
  };
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
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cardProducts.map((product) => {
          return (
            <OrderCard
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.image}
              handleDelete={handleDelete}
            ></OrderCard>
          );
        })}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cardProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className="w-full bg-black py-3 text-white rounded "
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
