import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = (item) => {
  const context = useContext(ShoppingCardContext);

  const addProductToCart = (event, product) => {
    event.stopPropagation();
    console.log(`product to add: ${JSON.stringify(product)}`);
    context.setCardProducts([...context.cardProducts, product]);
    context.setCount(context.count + 1);
    console.log(context.cardProducts);
    context.openOpenCheckoutSideMenu();
    context.closeProductDetail()
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => {
        context.openProductDetail();
        context.setProductToShow(item.item);
      }}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {item.item.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.item.image}
          alt={item.item.title}
        ></img>
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-gray-50 w-6 h-6 rounded-full text-center text-medium m-2 p-1"
          onClick={(event) => addProductToCart(event, item.item)}
        >
          <PlusIcon className="h-6 w-6 text-black-500" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.item.title}</span>
        <span className="text-lg font-medium">${item.item.price}</span>
      </p>
    </div>
  );
};

export default Card;
