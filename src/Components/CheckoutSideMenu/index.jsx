import { useContext } from "react";
import "./CheckoutSideMenu.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <aside
      className={`${
        context.isCheckooutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 text-black-500 cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </div>


    </aside>
  );
};

export default CheckoutSideMenu;
