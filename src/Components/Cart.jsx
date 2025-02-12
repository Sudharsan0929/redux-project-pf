import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  clearCart,
  removeProduct,
  updateQuantity,
} from "../Slices/Cartslice";
import Paypal from "./Paypal";

function Cart() {
  const { products, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-3xl font-bold text-gray-500">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between bg-white dark:bg-slate-500 shadow-md rounded-md p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-contain rounded "
            />

            <div className="flex-1 px-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg font-bold">
                Price: ₹{(product.price*86.18).toFixed(2)}
                
              </p>

              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-200 dark:bg-slate-600 px-2 py-1 rounded"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity - 1)
                  }
                  disabled={product.quantity === 1}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  className="bg-gray-200 dark:bg-slate-600 px-2 py-1 rounded"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="text-gray-500 dark:text-white">
                Total:₹{(product.totalPrice * 86.18).toFixed(2)}
              </p>

              <button
                className="text-red-500 mt-2"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <div>
          <h2 className="text-xl font-semibold">Total Items:{totalQuantity}</h2>
          <h2 className="text-xl font-semibold">
            Total Price:₹{(totalPrice * 86.18).toFixed(2)}
          </h2>
        </div>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Proceed to Payment</h2>
        <Paypal/>
      </div>
    </div>
  );
}

export default Cart;
