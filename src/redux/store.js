import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogs/blogSlice";

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
    },
})