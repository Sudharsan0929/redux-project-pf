import { createSlice } from "@reduxjs/toolkit";




const themeSlice = createSlice({
    name: "theme",
    initialState: {
        currentTheme:"dark"
    },
    reducers: {
        toggleTheme: (state) => {
            state.currentTheme = state.currentTheme === "light" ? "dark" : "light"
        },
    }
})

const themeReducer = themeSlice.reducer
 
export default themeReducer

export const { toggleTheme } = themeSlice.actions
