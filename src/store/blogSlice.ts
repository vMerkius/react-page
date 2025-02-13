import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBlog } from "../types/blog";

const URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface BlogState {
  blogs: IBlog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async () => {
  const response = await axios.get(`${URL}/blogs`);
  return response.data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.data;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load blogs.";
      });
  },
});

export const blogActions = blogSlice.actions;

export default blogSlice;
