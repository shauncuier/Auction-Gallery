import React from "react";

const FavItems = ({ favItems, itemPrice, handleRemoveItem }) => {
  if (favItems.length <= 0) {
    return (
      <div>
        <div className=" flex items-center justify-center pb-4 border-b-2 border-gray-300">
          <i className="ri-heart-3-line text-4xl text-[#0E2954] text-center"></i>
          <h3 className="font-medium text-3xl text-[#0E2954]">
            Favorite Items
          </h3>
        </div>
        <div className=" py-10 w-7/12 mx-auto text-center">
          <h3 className="text-2xl font-medium">No favorites yet</h3>
          <p className="text-lg mt-4">
            Click the heart icon on any item to add it to your favorites
          </p>
        </div>
        <div className="flex items-center justify-between border-t-2 border-gray-300 pt-4">
          <h3 className="text-2xl">Total bids Amount</h3>
          <h4 className="text-2xl font-medium">$0000</h4>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className=" flex items-center justify-center pb-4 border-b-2 border-gray-300">
        <i className="ri-heart-3-line text-4xl text-[#0E2954] text-center"></i>
        <h3 className="font-medium text-3xl text-[#0E2954]">Favorite Items</h3>
      </div>
      {favItems.map((favItem) => (
        <div
          key={favItem.id}
          className="flex justify-between py-4 border-b-2 border-gray-300"
        >
          <div className="flex gap-4">
            <img
              src={favItem.image}
              alt={favItem.title}
              className="w-20 border-2 border-gray-300 rounded object-cover"
            />
            <div className="">
              <h2 className="text-[#0E2954] font-semibold">{favItem.title}</h2>
              <div className="flex gap-5 mt-2">
                <span className="text-[#0E2954]">
                  ${favItem.currentBidPrice}
                </span>
                <span className="text-[#0E2954]">
                  Bids: {favItem.bidsCount}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              handleRemoveItem(favItem, favItem.id);
            }}
          >
            <i className="ri-close-line text-2xl cursor-pointer"></i>
          </button>
        </div>
      ))}
      <div className="flex items-center justify-between pt-4">
        <h3 className="text-xl text-[#0E2954] font-bold">Total bids Amount</h3>
        <h4 className="text-xl font-medium text-[#0E2954]">${itemPrice}</h4>
      </div>
    </>
  );
};

export default FavItems;
