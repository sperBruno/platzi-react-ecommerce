import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg w-80 p-4">
      <div className="flex  justify-between w-full ">
        <p className="flex flex-col ">
          <span className="font-light">Date: 01.02.03</span>
          <span className="font-light">TotalProducts: {totalProducts}</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon
            className="h-6 w-6 text-black cursor-pointer"
            // onClick={() => handleDelete(id)}
          />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
