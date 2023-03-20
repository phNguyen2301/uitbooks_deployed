import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'productDetails';

const initialState = {
  product: {},
};
export const getProductDetails = createAsyncThunk(
  `${namespace}/getProduct`,
  async (id) => {
    const data = await ProductDataService.getDetailBook(id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const productDetailsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearErrorsDetails: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: {
    [getProductDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload.book;
      state.error = action.payload.message;
    },
    [getProductDetails.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrorsDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
