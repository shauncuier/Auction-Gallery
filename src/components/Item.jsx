import React from "react";

const Item = ({ item, handleItem, isFav }) => {
  const { title, image, currentBidPrice, timeLeft } = item;

  return (
    <>
      <tr className="border-b-2 border-gray-300">
        <td className="flex flex-col sm:flex-row items-center sm:gap-5 sm:p-5 py-5">
          <img
            src={image}
            alt={title}
            className="sm:w-28 w-18 h-18 sm:h-20 object-cover rounded-2xl"
          />
          <h3 className="sm:text-lg text-center text-sm text-[#0E2954] font-medium">{title}</h3>
        </td>
        <td className="sm:p-5 p-1 sm:text-lg text-center text-sm font-medium text-[#0E2954]">
          ${currentBidPrice}
        </td>
        <td className="sm:p-5 p-1 sm:text-lg text-center text-smfont-medium text-[#0E2954]">{timeLeft}</td>
        <td className="text-center">
          <button
            className="cursor-pointer"
            onClick={() => {
              handleItem(item, item.id);
            }}
          >
            {isFav ? (
              <i className="ri-heart-3-fill text-red-500 text-3xl cursor-not-allowed"></i>
            ) : (
              <i className="ri-heart-3-line text-3xl"></i>
            )}
          </button>
        </td>
      </tr>
    </>
  );
};

export default Item;
