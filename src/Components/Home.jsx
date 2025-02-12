import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { fetchProducts } from '../Slices/Productslice';

function Home() {
    const { status, items, error } = useSelector((state) => state.product);
    const dispatch = useDispatch();

      useEffect(() => {
        console.log("Inside use effect");
        if (status == "idle") {
          dispatch(fetchProducts());
        }
      }, [dispatch, status]);
    
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero section */}
      <div className="bg-blue-500 text-white py-16 text-center rounded-b-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Shop!</h1>
        <p className="text-lg mb-6">
          Discover amazing products at great prices!
        </p>
        <NavLink
          to="/products"
          className="bg-white text-blue-500 px-6 py-2 rounded-md font-semibold shadow hover:bg-gray-100 transition"
        >
          Shop Now
        </NavLink>
      </div>

      <div className="mt-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Featured Products
        </h2>

        {status === "Loading" && (
          <p className="text-center text-lg text-blue-500">Loading...</p>
        )}
        {status === "Failed" && (
          <p className="text-center text-lg text-red-500">{error}</p>
        )}

        {status === "Loaded" && items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-full object-contain bg-gray-300 dark:bg-gray-700 rounded-md mb-4"
                />
                <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ₹{(item.price * 86.18).toFixed(2)}
                </p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          status === "succeeded" && (
            <p className="text-center text-lg text-gray-500">
              No products available.
            </p>
          )
        )}
      </div>
          
          {/* Footer */}

      <footer className="mt-12 bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">© 2025 Your Shop. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home