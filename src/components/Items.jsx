import React, { useEffect, useState } from "react";
import Item from "./Item";

const Items = ({ handleItem, favItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("auction.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <div className="">
        <table className="min-w-full">
          <thead className="">
            <tr className="border-b-2 border-gray-300 text-left">
              <th className="py-5 px-4 sm:text-xl opacity-70">Items</th>
              <th className="py-5 px-4 sm:text-xl opacity-70">Current Bid</th>
              <th className="py-5 px-4 sm:text-xl opacity-70">Time Left</th>
              <th className="py-5 px-4 sm:text-xl opacity-70">Bid Now</th>
            </tr>
          </thead>
          <tbody className="">
            {items.map((item) => {
              const isFav = favItems.some((fav) => fav.id === item.id);
              return (
                <Item
                  key={item.id}
                  item={item}
                  handleItem={handleItem}
                  isFav={isFav}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Items;
