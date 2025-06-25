import React from "react";

const Nav = (favItems) => {
  return (
    <div className="">
      <div className="navbar w-full px-5 md:max-w-[90%] md:px-0 mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Auctions</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>How to works</a>
              </li>
            </ul>
          </div>
          <a className="text-xl">
            <span className="text-blue-800 font-medium">Auction</span>
            <span className="text-yellow-400 font-bold">Gallery</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-5 px-1">
            <li>
              <a className="cursor-pointer font-medium hover:text-blue-800">
                Home
              </a>
            </li>
            <li>
              <a className="cursor-pointer font-medium hover:text-blue-800">
                Auctions
              </a>
            </li>
            <li>
              <a className="cursor-pointer font-medium hover:text-blue-800">
                Categories
              </a>
            </li>
            <li>
              <a className="cursor-pointer font-medium hover:text-blue-800">
                How to works
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle">
              <div className="indicator">
                <i className="ri-notification-2-line text-xl text-[#0E2954]"></i>
                <span className="badge badge-sm indicator-item bg-amber-300  text-[#0E2954] h-5 w-5 text-sm font-medium border-2 border-white rounded-full p-2">
                  {favItems.favItems.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            ></div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://i.ibb.co/sp7c86DH/21cd43fa7eac.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
