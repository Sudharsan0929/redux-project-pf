import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Products from "./Components/Products";
import { useSelector } from "react-redux";
import Cart from "./Components/Cart";



function App() {
  const theme  = useSelector((state) => state.theme.currentTheme)
  console.log(theme)
  return (
    // <div className="container p-4 mx-auto dark:bg-slate-900 dark:text-white">
    //   <Navbar/>
    //   <Products />
    // </div>
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="container p-4 mx-auto bg-slate-100 dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
