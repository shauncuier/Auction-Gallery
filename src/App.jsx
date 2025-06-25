import "remixicon/fonts/remixicon.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Items from "./components/Items";
import Footer from "./components/Footer";
import FavItems from "./components/FavItems";
import { useState, useCallback } from "react";
import { ToastContainer } from "react-toastify";
import { notifyAdded, notifyRemove } from "./utils/toast";

function App() {
  const [favItems, setFavItems] = useState([]);
  const [itemPrice, setItemPrice] = useState("0000");

  const handleItem = useCallback(
    (item) => {
      const isAlreadyAdded = favItems.some((fav) => fav.id === item.id);
      if (!isAlreadyAdded) {
        const newItem = [...favItems, item];
        setFavItems(newItem);
        const newPrice = parseInt(itemPrice) + parseInt(item.currentBidPrice);
        setItemPrice(newPrice);
        notifyAdded();
      } 
    },
    [favItems, itemPrice]
  );

  const handleRemoveItem = useCallback(
    (removeItem, id) => {
      const removePrice =
        parseInt(itemPrice) - parseInt(removeItem.currentBidPrice);
      setItemPrice(removePrice);
      const remaining = favItems.filter((item) => item.id !== id);
      setFavItems(remaining);
      notifyRemove();
    },
    [favItems, itemPrice]
  );

  return (
    <>
      <Nav favItems={favItems} />
      <Hero />
      <div className="bg-[#C8D4E960] py-14">
        <div className="w-full px-5 md:max-w-[90%] md:px-0 mx-auto">
          <div className="">
            <h2 className="text-[#0E2954] font-medium text-3xl">
              Active Auctions
            </h2>
            <p className="text-xl mt-2">
              Discover and bid on extraordinary items
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 mt-10">
            <div className="lg:w-[70%] w-full bg-white rounded-xl">
              <ToastContainer />
              <Items handleItem={handleItem} favItems={favItems}></Items>
            </div>
            <div className="lg:w-[30%] w-full h-full bg-white rounded-xl p-5 mx-auto">
              <FavItems
                favItems={favItems}
                itemPrice={itemPrice}
                handleRemoveItem={handleRemoveItem}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
