import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#ffffff] my-[132px] space-y-4">
      <div>
        <a
          href="#"
          className="text-center btn text-[#003EA4] bg-white hover:bg-white hover:shadow-none shadow-none border-none text-xl"
        >
          Auction<span className="text-[#FFD337] font-bold">Gallery</span>
        </a>
      </div>
      <div>
        <ul className="flex  justify-center items-center gap-6 font-medium">
          <li>
            <a href="">Bid.</a>
          </li>
          <li>
            <a href="">Win.</a>
          </li>
          <li>
            <a href="">Own.</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col sm:flex-row justify-center items-center sm:gap-10">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Auctions</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">How to works</a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          © {new Date().getFullYear()} Auction Gallery. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
