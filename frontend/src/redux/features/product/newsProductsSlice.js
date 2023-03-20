import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductDataService from '../../../services/product';

const namespace = 'newsProduct';

const initialState = {
  products: [],
};

export const getNewsProducts = createAsyncThunk(
  `${namespace}/getNewsProducts`,
  async () => {
    const data = await ProductDataService.getNewsBook()
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  }
);
export const newsProductsSlice = createSlice({
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
    //getNewsProducts
    [getNewsProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getNewsProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.books;
      state.success = action.payload.success;
      state.error = action.payload.message;
    },
    [getNewsProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { clearErrors, resetState } = newsProductsSlice.actions;

export default newsProductsSlice.reducer;
