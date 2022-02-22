import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBlogAsync = createAsyncThunk('blogs/getBlogAsync', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
})
export const getSlugAsync = createAsyncThunk('blogs/getSlugAsync', async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await res.json();
})

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        addBlog: (state, action) => {
            state.items.push(action.payload)
        }
    },
    extraReducers: {
        [getBlogAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getBlogAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getBlogAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [getSlugAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getSlugAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getSlugAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
});

export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;