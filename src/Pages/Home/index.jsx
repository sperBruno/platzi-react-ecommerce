import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCardContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCardContext);
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => {
        // console.log(JSON.stringify(item.id));

        return <Card item={item} key={item.id}></Card>;
      });
    } else {
      return (
        <div>
          <span>We don't have that product</span>
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        className="rounded-lg border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
        type="text"
        placeholder="Search a Product"
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail></ProductDetail>
    </Layout>
  );
}

export default Home;
