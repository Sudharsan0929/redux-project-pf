import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Slices/ThemeSlice";
import productReducer from "../Slices/Productslice";
import cartReducer from "../Slices/Cartslice";


const store = configureStore({
    reducer: {
        theme: themeReducer,
        product: productReducer,
        cart:cartReducer
    }
})

export default store