import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import blogService from "../blog/blogService";

const initialState = {
	blogs: [],
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

export const setBlog = createAsyncThunk(
	"blog/write",
	async (blogData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await blogService.setBlog(blogData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getBlog = createAsyncThunk(
	"blog/getBlogs",
	async (_, thunkAPI) => {
		try {
			return await blogService.getBlogs();
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const deleteBlog = createAsyncThunk(
	"goals/delete",
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await blogService.deleteBlog(id, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const blogSlice = createSlice({
	name: "blogs",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(setBlog.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(setBlog.fulfilled, (state, action) => {
				state.isSuccess = true;
				state.isLoading = false;
				state.blogs.push(action.payload);
			})
			.addCase(setBlog.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getBlog.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getBlog.fulfilled, (state, action) => {
				state.isSuccess = true;
				state.isLoading = false;
				state.blogs = action.payload;
			})
			.addCase(getBlog.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteBlog.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteBlog.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.blogs = state.blogs.filter(
					(blog) => blog._id !== action.payload.id
				);
			})
			.addCase(deleteBlog.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
