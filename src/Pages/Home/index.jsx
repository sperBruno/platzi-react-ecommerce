import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";


function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    // fetch("https://api.escuelajs.co/api/v1/products")
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => 
      {
        // console.log(data)
        setItems(data)});
      
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => {
          // console.log(JSON.stringify(item.image));

          return <Card item={item} key={item.id}></Card>;
        })}
      </div>
      <ProductDetail></ProductDetail>
    </Layout>
  );
}

export default Home;
