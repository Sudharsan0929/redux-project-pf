import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkApi) => {
   try {
       const { data } = await axios.get("")
      
       return data
   } catch (error) {
       return thunkApi.rejectWithValue(error.message)
   }
})

const productSlice = createSlice({
    name: "Products",
    initialState: {
        items: [],
        status:"idle",
        error:null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "Loaded"
            state.items = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "Failed"
            state.error = action.payload
        })
    }
})


const productReducer = productSlice.reducer

export default productReducer