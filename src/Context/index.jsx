import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  //ShowProductDetail
  const [produtToShow, setProductToShow] = useState({});

  console.log(`Count: ${count}`);

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        produtToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
