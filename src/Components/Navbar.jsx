import React from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { toggleTheme } from "../Slices/ThemeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";

function Navbar() {
  const totalQuantity= useSelector((state)=>state.cart.totalQuantity)
  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center dark:bg-slate-700 bg-slate-200 h-16 px-4 sm:px-6 lg:px-8  shadow-lg dark:shadow-slate-600 shadow-blue-300 mb-12 rounded-lg">
      <h1 className="text-3xl font-bold font-serif bg-white px-4 py-2 text-blue-500 rounded-md">
        <BiShoppingBag/>
      </h1>
      <nav className="text-lg">
        <ul className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "hover:text-blue-400 hover:scale-110 transform transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "hover:text-blue-400  hover:scale-110 transform transition duration-300"
            }
          >
            Products
          </NavLink>
          <div className="relative">
            <NavLink to="/cart" className="text-2xl ">
              <PiShoppingCartDuotone className="hover:scale-110 transform transition duration-300" />
            </NavLink>
            <span className="rounded-full absolute -top-3 -right-1 bg-blue-500 text-white text-xs px-1 py-0.5 shadow-md ">
             {totalQuantity}
            </span>
          </div>
        </ul>
      </nav>
      <button
        className="bg-white dark:bg-slate-600 px-4 py-2 rounded shadow-md dark:shadow-slate-500 shadow-blue-500"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default Navbar;
