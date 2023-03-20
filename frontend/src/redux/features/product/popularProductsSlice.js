import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'popularProducts';

const initialState = {
  products: [],
};

export const getPopularProducts = createAsyncThunk(
  `${namespace}/getPopularProducts`,
  async () => {
    const data = await ProductDataService.getPopularBook()
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const popularProducts = createSlice({
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
    //getPopularProducts
    [getPopularProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPopularProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
      state.success = action.payload.success;
      state.error = action.payload.message;
    },
    [getPopularProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors, resetState } = popularProducts.actions;

export default popularProducts.reducer;
