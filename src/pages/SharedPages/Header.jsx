import React from "react";

const Header = () => {
  const navOptions = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Our Menu</summary>
          <ul className="p-2">
            <li>
              <a>Menu 1</a>
            </li>
            <li>
              <a>Menu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Our Shop</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </>
  );
  return (
    <div className="w-5/6 mx-auto my-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navOptions}
             
            </ul>
          </div>
          <a className="btn btn-ghost text-xl "> <span className="text-3xl font-extrabold text-red-700">MAK</span> RESTAURANT</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign Out</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
