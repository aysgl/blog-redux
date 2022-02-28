import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBlogAsync = createAsyncThunk('blogs/getBlogAsync', async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await res.json();
    } catch (err) {
        console.log('Looks like there was a problem: ', err);
    }
})


export const getSlugAsync = createAsyncThunk('blogs/getSlugAsync', async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return await res.json();
    } catch (err) {
        console.log('Looks like there was a problem: ', err);
    }
})

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        posts: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        addBlog: (state, action) => {
            state.posts.push(action.payload)
        },
        nextBlog: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: {
        [getBlogAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getBlogAsync.fulfilled]: (state, action) => {
            state.posts = action.payload;
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
            state.posts = action.payload;
            state.isLoading = false;
        },
        [getSlugAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
});

export const { addBlog, nextBlog } = blogSlice.actions;
export default blogSlice.reducer;