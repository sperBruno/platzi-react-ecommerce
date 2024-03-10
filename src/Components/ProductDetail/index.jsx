import { useContext } from "react";
import "./ProductDetail.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="h-6 w-6 text-black-500 cursor-pointer"
          onClick={() => context.closeProductDetail()}
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.produtToShow.images[0]}
          alt={context.produtToShow.title}
        ></img>
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.produtToShow.price}
        </span>
        <span className="font-medium text-xl">
          {context.produtToShow.title}
        </span>
        <span className="font-light text-md">
          {context.produtToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
