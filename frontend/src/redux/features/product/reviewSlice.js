import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductDataService from "../../../services/product";

const namespace = "review";

const initialState = {};
// fix object
export const deleteReviews = createAsyncThunk(
  `${namespace}/deleteReviews`,
  async (idData) => {
    const { reviewId, bookId } = idData;
    // const { data } = await axios.delete(
    //   `https://peaceful-brushlands-80713.herokuapp.com/api/v2/reviews?id=${reviewId}&bookId=${bookId}`
    // );
    // console.log(data);
    // return data.success;
    const data = await ProductDataService.deleteReview(reviewId, bookId)
      .then((res) => {
        // console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        // console.log(err.response.data);
        return err.response.data;
      });
    return data;
  }
);
export const reviewSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrorsDeleteReview: (state, action) => {
      state.error = null;
    },
    resetStateDeletedReview: (state, action) => {
      state.isDeleted = false;
    },
  },
  extraReducers: {
    [deleteReviews.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload.success;
      state.error = action.payload.message;
    },
    [deleteReviews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrorsDeleteReview, resetStateDeletedReview } =
  reviewSlice.actions;

export default reviewSlice.reducer;
