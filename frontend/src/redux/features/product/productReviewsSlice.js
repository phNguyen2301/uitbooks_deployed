import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'allReview';

const initialState = {
  reviews: [],
};
// fix object
export const getAllReviews = createAsyncThunk(
  `${namespace}/getAllReviews`,
  async (id) => {
    const data = await ProductDataService.getAllReview(id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const productReviewsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
    resetState: (state, action) => {
      state.success = false;
    },
  },
  extraReducers: {
    [getAllReviews.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.reviews = action.payload.reviews;
      state.error = action.payload.message;
    },
    [getAllReviews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors, resetState } = productReviewsSlice.actions;

export default productReviewsSlice.reducer;
