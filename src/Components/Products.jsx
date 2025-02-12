import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slices/Productslice";
import { addProduct } from "../Slices/Cartslice";

function Products() {
    const { status, items, error } = useSelector((state) => state.product);
    const cartItems = useSelector((state) => state.cart.products)


    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Inside use effect");
        if (status == "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    if (status == "Loading") {
        return (
            <div className="flex justify-around items-center h-screen ">
                <h3 className="text-5xl text-blue-500 text-center">Loading...</h3>
            </div>
        );
    }

    if (status == "Failed") {
        return (
            <div className="flex justify-around items-center h-screen ">
                <h3 className="text-5xl text-blue-500 text-center">{error}</h3>
            </div>
        );
    }

    const handleAddToCart = (product) => {
        dispatch(addProduct(product));
    };

    const isInCart = (id) => {
        return cartItems.some((cartItem) => cartItem.id === id);
    };

    return (
        <div className=" flex flex-wrap  gap-4 p-4 justify-evenly   ">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col  rounded-md md:w-1/3  lg:w-1/6 w-full sm:w-1/3 shadow-md shadow-gray-400 px-4 py-2 "
                >
                    <img
                        src={item.image}
                        alt={item.title || "Product Image"}
                        className="w-full h-40 object-contain"
                    />
                    <div>
                        <h2 className="text-xl font-semibold truncate">{item.title}</h2>
                        <p className="text-gray-600 dark:text-slate-400 ">
                            {item.category}
                        </p>
                        <p className="text-xl font-bold">
                            ₹ {(item.price * 86.18).toFixed(2)}
                        </p>
                    </div>
                    <p className=" text-sm line-clamp-2 text-wrap text-justify p-1 dark:text-slate-400  text-gray-600">
                        {item.description}
                    </p>
                    <div className="flex w-full gap-2 flex-nowrap items-center text-xl">
                        <div>
                            <span className="text-yellow-500">
                                {"★".repeat(parseInt(item.rating.rate))}
                            </span>
                            <span className="text-gray-500 dark:text-slate-400 ">
                                {"☆".repeat(5 - parseInt(item.rating.rate))}
                            </span>
                        </div>
                        <span className="text-sm">{item.rating.rate}</span>
                        <span className="text-sm dark:text-slate-400  text-gray-500">
                            ({item.rating.count})
                        </span>
                    </div>
                    <button
                        className={`py-2 rounded-md hover:cursor-pointer transform transition duration-300
                ${isInCart(item.id)
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500/60 hover:cursor-pointer hover:scale-110"
                            }`}
                        onClick={() => handleAddToCart(item)}
                        disabled={isInCart(item.id)}
                    >
                        {isInCart(item.id) ? "In Cart" : "Add"}
                    </button>
                </div>
            ))}
        </div>
    );
}
    
//   return (
//     <div className=" flex flex-wrap  gap-4 p-4 justify-evenly   ">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="flex flex-col  rounded-md md:w-1/3  lg:w-1/6 w-full sm:w-1/3 shadow-md shadow-gray-400 px-4 py-2 "
//         >
//           <img
//             src={item.image}
//             alt={item.title || "Product Image"}
//             className="w-full h-40 object-contain"
//           />
//           <div>
//             <h2 className="text-xl font-semibold truncate">{item.title}</h2>
//             <p className="text-gray-600 dark:text-slate-400 ">
//               {item.category}
//             </p>
//             <p className="text-xl font-bold">
//               ₹ {(item.price * 86.18).toFixed(2)}
//             </p>
//           </div>
//           <p className=" text-sm line-clamp-2 text-wrap text-justify p-1 dark:text-slate-400  text-gray-600">
//             {item.description}
//           </p>
//           <div className="flex w-full gap-2 flex-nowrap items-center text-xl">
//             <div>
//               <span className="text-yellow-500">
//                 {"★".repeat(parseInt(item.rating.rate))}
//               </span>
//               <span className="text-gray-500 dark:text-slate-400 ">
//                 {"☆".repeat(5 - parseInt(item.rating.rate))}
//               </span>
//             </div>
//             <span className="text-sm">{item.rating.rate}</span>
//             <span className="text-sm dark:text-slate-400  text-gray-500">
//               ({item.rating.count})
//             </span>
//           </div>
//           <button className="bg-blue-500/60 py-2 rounded-md hover:cursor-pointer transform transition duration-300 hover:scale-110">Add</button>
//         </div>
//       ))}
//     </div>
//   );
// }

export default Products;
