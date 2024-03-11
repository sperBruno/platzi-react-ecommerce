import { createContext, useEffect, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  //ShowProductDetail
  const [productToShow, setProductToShow] = useState({});
  const [cardProducts, setCardProducts] = useState([]);

  //Shoping cart orders
  const [order, setOrder] = useState([]);

  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  //Get products by ttitle
  const [searchByTitle, setSearchByTitle] = useState(null);
  // console.log(searchByTitle)

  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    // fetch("https://api.escuelajs.co/api/v1/products")
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setItems(data);
      });
  }, []);
  // console.log(`Count: ${count}`);

  const filterBy = (searchType, items, searchByCategory, searchByTitle) => {
    if (!searchType) {
      return items;
    }

    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "By_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
  };
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    // console.log("items", items)
    // console.log(searchByCategory)
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByCategory,
          searchByTitle
        )
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByCategory, searchByTitle)
      );
    }
    if (!searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy("By_CATEGORY", items, searchByCategory, searchByTitle)
      );
    }
    if (!searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchByCategory, searchByTitle));
    }
  }, [items, searchByTitle, searchByCategory]);
  // console.log(`filtered items: ${JSON.stringify(filteredItems)}`)
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  const openOpenCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };

  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cardProducts,
        setCardProducts,
        isCheckoutSideMenuOpen,
        openOpenCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
        filteredItemsByCategory,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
