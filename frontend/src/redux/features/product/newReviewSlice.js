import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'newReview';

const initialState = {};
// fix object
export const newReview = createAsyncThunk(
  `${namespace}/newReview`,
  async (reviewData) => {
    const data = await ProductDataService.createNewReview(reviewData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const newReviewSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrorsReview: (state, action) => {
      state.error = null;
    },
    resetStateReview: (state, action) => {
      state.success = false;
    },
  },
  extraReducers: {
    [newReview.pending]: (state, action) => {
      state.loading = true;
    },
    [newReview.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.error = action.payload.message;
    },
    [newReview.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrorsReview, resetStateReview } = newReviewSlice.actions;

export default newReviewSlice.reducer;
